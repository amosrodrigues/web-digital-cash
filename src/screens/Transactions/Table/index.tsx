import { Transaction } from '../../../context/Transactions';
import { useTransactions } from '../../../hooks/useTransactions';
import { dateFormatter, currencyFormatter } from '../../../utils/formatter';
import { PriceHighlight, TableContainer, TransactionsTable } from './styles';

export function Table() {
  const { transactions, summary } = useTransactions();

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
                    <span>{transaction.type === 'debited' && '- '}</span>
                    {currencyFormatter.format(transaction.value / 100)}
                  </PriceHighlight>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <span>Total </span>
              Créditos
              <PriceHighlight as="p">
                {currencyFormatter.format(summary.totalCredited / 100)}
              </PriceHighlight>
            </td>
            <td>
              <span>Total </span>
              Débitos
              <PriceHighlight as="p" variant="debited">
                {' - '}
                {currencyFormatter.format(summary.totalDebited / 100)}
              </PriceHighlight>
            </td>
            <td>
              Total
              <PriceHighlight
                as="p"
                variant={summary.total > 0 ? 'credited' : 'debited'}>
                {currencyFormatter.format(summary.total / 100)}
              </PriceHighlight>
            </td>
          </tr>
        </tfoot>
      </TransactionsTable>
    </TableContainer>
  );
}
