import { type } from 'os'
import { Transaction } from '../../../context/Transactions'
import { useTransactions } from '../../../hooks/useTransactions'
import { dateFormatter, currencyFormatter } from '../../../utils/formatter'
import { PriceHighlight, TableContainer, TransactionsTable } from './styles'

// interface Transaction {
//   id: number
//   type: 'credited' | 'debited'
//   userName: string
//   price: number
//   createdAt: string
// }

// const transactions = [
//   {
//     id: 1,
//     type: 'debited',
//     price: 100,
//     createdAt: '2022-11-18T19:51:13.294Z',
//     userName: 'amos@amos.com',
//   },

//   {
//     id: 2,
//     type: 'credited',
//     userName: 'amos@amos.com',
//     price: 100,
//     createdAt: '2022-11-18T19:51:13.294Z',
//   },
// ] as Transaction[]

type TransactionFormated = {
  data: Date
  nroDoc: string
  tipo: string
  valor: number
}

export function Table() {
  const { transactions } = useTransactions()

  return (
    <TableContainer>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Data Mov.</th>
            <th>NR Doc.</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td>{transaction.id}</td>
                <td>{transaction.creditedAccountId}</td>
                <td>
                  <PriceHighlight variant="debited">
                    <span> {'debited' === 'debited' && '- '}</span>
                    {currencyFormatter.format(transaction.value)}
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
