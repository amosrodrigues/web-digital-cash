import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { TextInput } from '../../../components/TextInput'
import { TransactionContainer } from './styles'
import { toast } from 'react-toastify'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../../components/Button'
import { Loading } from '../../../components/Loading'
import { useEffect } from 'react'
import { Box } from '../../../components/Box'
import * as Dialog from '@radix-ui/react-dialog'
import { TransactionModal } from '../TransactionModal'

type SignInFormData = {
  email?: string
  cash?: number
}

const CashInOutSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .email('E-mail inválido'),
  cash: yup
    .string()
    .typeError('Valor obrigatório')
    .required('Valor obrigatório'),
})

export function Transaction() {
  const { register, handleSubmit, formState, watch, setValue, reset } = useForm(
    {
      resolver: yupResolver(CashInOutSchema),
    },
  )

  const handleCashInOut: SubmitHandler<SignInFormData> = async (
    values,
    event,
  ) => {
    event?.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Success Notification Success Notification!', {
      theme: 'dark',
    })

    reset()
    console.log(values)
  }

  const normalizeCashNumber = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.')
  }

  const { errors } = formState

  const cashValue = watch('cash')

  useEffect(() => {
    setValue('cash', normalizeCashNumber(cashValue))
  }, [cashValue])

  return (
    <TransactionContainer onSubmit={handleSubmit(handleCashInOut)}>
      <label htmlFor="email">
        <TextInput
          id="email"
          type="email"
          placeholder="E-mail do destinatário"
          autoComplete="off"
          {...register('email')}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <span>{String(message)}</span>}
        />
      </label>
      <label htmlFor="cash">
        <TextInput
          prefix="R$ "
          id="cash"
          placeholder="0,00"
          {...register('cash')}
        />
        <ErrorMessage
          errors={errors}
          name="cash"
          render={({ message }) => <span>{message}</span>}
        />
      </label>

      <Button disabled={formState.isSubmitting}>
        {formState.isSubmitting ? <Loading /> : 'Transferir'}
      </Button>
      {/* <Dialog.Root>
        <Dialog.Trigger type="submit" asChild></Dialog.Trigger>

        <TransactionModal />
      </Dialog.Root> */}
    </TransactionContainer>
  )
}
