import { FileCsv } from 'phosphor-react';
import { ReactNode } from 'react';
import { CSVLink } from 'react-csv';

import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormatter, dateFormatter } from '../../utils/formatter';
import { DropdownMenuItem } from './styles';

export function TransactionsCSV() {
  const { transactions } = useTransactions();

  const headers = [
    { label: 'Data Mov.', key: 'dataMov' },
    { label: 'Tipo', key: 'tipo' },
    { label: 'Valor', key: 'valor' },
  ];

  const data = transactions.map((transaction) => {
    return {
      dataMov: dateFormatter.format(new Date(transaction.createdAt)),
      tipo: transaction.type === 'credited' ? 'Crédito' : 'Débito',
      valor: `${transaction.type === 'credited' ? '' : '-'}${currencyFormatter
        .format(transaction.value / 100)
        .replace('R$', '')
        .trim()}`,
    };
  });

  const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

  const csvReport = {
    data,
    headers,
    filename: `relatorio-${myDate}`,
    separator: ';',
  };

  return (
    <CSVLink {...csvReport}>
      <DropdownMenuItem asChild>
        <button type="button">
          <FileCsv size={32} />
        </button>
      </DropdownMenuItem>
    </CSVLink>
  );
}
