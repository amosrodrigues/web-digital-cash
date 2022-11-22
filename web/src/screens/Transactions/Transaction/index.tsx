import { SubmitHandler, useForm } from 'react-hook-form'
import { TextInput } from '../../../components/TextInput'
import {
  AnimationIcons,
  FormContent,
  IconImage,
  StatusContent,
  TransactionContainer,
} from './styles'
import { toast } from 'react-toastify'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../../components/Button'
import { Loading } from '../../../components/Loading'
import { useEffect, useState } from 'react'
import { Money, UserMinus, UserPlus } from 'phosphor-react'
import { StatusLoader } from '../StausLoader'

type TransactionFormData = {
  username?: string
  cash?: number
}

const CashInOutSchema = yup.object().shape({
  username: yup
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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState, watch, setValue, reset } = useForm(
    {
      resolver: yupResolver(CashInOutSchema),
    },
  )

  const handleCashInOut: SubmitHandler<TransactionFormData> = async (
    values,
    event,
  ) => {
    event?.preventDefault()
    setIsSubmitted(false)
    const response = await new Promise((resolve) =>
      setTimeout(() => {
        toast.success('Success Notification Success Notification!', {
          theme: 'dark',
        })
        resolve(true)
      }, 2000),
    )

    response && setIsSubmitted(true)

    reset()
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
    <TransactionContainer>
      <StatusContent>
        <IconImage active={isSubmitted ? 'false' : 'true'}>
          <UserMinus size={64} weight="bold" />
        </IconImage>
        <AnimationIcons>
          <Money size={48} />
          <div>
            {formState.isSubmitting ? (
              <StatusLoader />
            ) : (
              '$ $ $ $ $ $ $ $ $ $ $ $'
            )}
          </div>
        </AnimationIcons>
        <IconImage active={isSubmitted ? 'true' : 'false'}>
          <UserPlus size={64} weight="bold" />
        </IconImage>
      </StatusContent>
      <FormContent onSubmit={handleSubmit(handleCashInOut)}>
        <label htmlFor="username">
          <TextInput
            id="username"
            type="username"
            placeholder="E-mail do destinatário"
            autoComplete="off"
            {...register('username')}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => <span>{String(message)}</span>}
          />
        </label>
        <label htmlFor="cash">
          <TextInput
            prefix="R$ "
            id="cash"
            placeholder="0,00"
            autoComplete="off"
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
      </FormContent>
    </TransactionContainer>
  )
}
