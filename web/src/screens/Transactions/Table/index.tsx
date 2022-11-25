import { type } from 'os'
import { Transaction } from '../../../context/Transactions'
import { useTransactions } from '../../../hooks/useTransactions'
import { dateFormatter, currencyFormatter } from '../../../utils/formatter'
import { PriceHighlight, TableContainer, TransactionsTable } from './styles'

type TransactionFormated = {
  data: Date
  nroDoc: string
  tipo: string
  valor: number
}

export function Table() {
  const { transactions } = useTransactions()

  console.log(transactions)

  return (
    <TableContainer>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Data Mov.</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>

                <td>
                  {transaction.type === 'credited' ? 'Crédito' : 'Débito'}
                </td>
                <td>
                  <PriceHighlight
                    variant={
                      transaction.type === 'credited' ? 'credited' : 'debited'
                    }>
                    <span> {transaction.type === 'debited' && '- '}</span>
                    {currencyFormatter.format(transaction.value / 100)}
                  </PriceHighlight>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TableContainer>
  )
}
