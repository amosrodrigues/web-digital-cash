import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Money, UserMinus, UserPlus } from 'phosphor-react'
import { StatusLoader } from '../StausLoader'
import { api } from '../../../services'
import { useAuth } from '../../../hooks/useAuth'
import { toast, ToastContainer } from 'react-toastify'

import { TextInput } from '../../../components/TextInput'
import { Button } from '../../../components/Button'
import { Loading } from '../../../components/Loading'

import {
  AnimationIcons,
  FormContent,
  IconImage,
  StatusContent,
  TransactionContainer,
} from './styles'

import axios, { AxiosError } from 'axios'

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
  const { user, onGetUserData } = useAuth()
  const {
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    reset,
    setFocus,
  } = useForm({
    resolver: yupResolver(CashInOutSchema),
  })

  const handleCashInOut: SubmitHandler<TransactionFormData> = async (
    values,
    event,
  ) => {
    event?.preventDefault()

    const requestData = {
      value: Number(values.cash?.toString().replace(',', '').replace('.', '')),
      creditedAccountId: values.username,
      debitedAccountId: user?.username,
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      await api.post<Promise<void>>('/transactions', requestData)

      toast.success('Transferência realizada com sucesso!', { theme: 'dark' })
      setIsSubmitted(true)
      onGetUserData()
      reset()
    } catch (error) {
      let description = 'Erro ao tentar transferir, cheque os dados!'

      if (axios.isAxiosError(error)) {
        const err = error as AxiosError

        switch (err.response?.status) {
          case 403:
            description = 'Não é possível tranferir para mesma titularidade!'
            setFocus('username')
            break
          case 404:
            description = 'Conta do destinatário inexistente!'
            setFocus('username')
            break
          case 400:
            description = 'Saldo insuficiente!'
            setFocus('cash')
            break
          default:
            break
        }
      }
      toast.error(`${description}`, {
        theme: 'dark',
      })
    }
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
      <ToastContainer autoClose={3000} />
      <StatusContent>
        <IconImage active={isSubmitted ? 'false' : 'true'}>
          <UserMinus size={64} weight="bold" />
        </IconImage>
        <AnimationIcons>
          <Money size={48} />
          <div>{formState.isSubmitting ? <StatusLoader /> : ''}</div>
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
