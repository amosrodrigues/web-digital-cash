import {
  DateContainer,
  SearchContainer,
  TransactionType,
  TransactionTypeButton,
  TypesContainer,
} from './styles'

import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { TextInput } from '../../../components/TextInput'

import { toast } from 'react-toastify'

import { Button } from '../../../components/Button'
import { Loading } from '../../../components/Loading'

import {
  ArrowCircleDown,
  ArrowCircleUp,
  MagnifyingGlass,
  Receipt,
} from 'phosphor-react'
import { useTransactions } from '../../../hooks/useTransactions'

type SearchFormData = {
  startDate: Date
  endDate: Date
  type: 'debited' | 'credited' | 'all'
}

export function Search() {
  const { register, handleSubmit, formState, reset, control } =
    useForm<SearchFormData>({
      defaultValues: {
        type: 'all',
      },
    })

  const { onGetTransactions } = useTransactions()

  const handleSearchTransactios: SubmitHandler<SearchFormData> = async (
    data,
    event,
  ) => {
    event?.preventDefault()

    console.log(data)

    try {
      onGetTransactions(data)
    } catch (error) {}

    // toast.success('Success Notification Success Notification!', {
    //   theme: 'dark',
    // })

    reset()
    // console.log(values)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactios)}>
      <div>
        <DateContainer>
          <label htmlFor="startDate">
            Início
            <TextInput
              id="startDate"
              type="date"
              autoComplete="off"
              {...register('startDate')}
            />
          </label>
          <label htmlFor="endDate">
            Fim
            <TextInput
              id="endDate"
              type="date"
              autoComplete="off"
              {...register('endDate')}
            />
          </label>
        </DateContainer>

        <TypesContainer>
          <label htmlFor="type">
            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}>
                    <TransactionTypeButton variant="all" value="all">
                      <Receipt size={24} weight="bold" />
                      Todas
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="credited" value="credited">
                      <ArrowCircleUp size={24} />
                      Crédito
                    </TransactionTypeButton>

                    <TransactionTypeButton variant="debited" value="debited">
                      <ArrowCircleDown size={24} />
                      Débito
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />
          </label>
        </TypesContainer>
      </div>

      <Button variant="secondary" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={28} weight="bold" />
        {formState.isSubmitting ? <Loading /> : 'Buscar'}
      </Button>
    </SearchContainer>
  )
}
