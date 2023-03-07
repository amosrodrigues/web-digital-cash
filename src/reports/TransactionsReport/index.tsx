import { DownloadSimple, FileCsv, FilePdf } from 'phosphor-react';
import { useCallback } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuArrow,
  DropdownMenuSeparator,
} from './styles';
import { TransactionsPDF } from './TransactionsCSV';
import { transactionsPDF } from './transactionsPDF';

export function TransactionsReport() {
  const { transactions, summary } = useTransactions();

  const handleTransactionsPDF = useCallback(
    () => transactionsPDF(transactions, summary),
    [summary, transactions],
  );

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <DownloadSimple size={28} weight="bold" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <button type="button" onClick={handleTransactionsPDF}>
              <FilePdf size={32} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <TransactionsPDF>
            <DropdownMenuItem asChild>
              <button type="button">
                <FileCsv size={32} />
              </button>
            </DropdownMenuItem>
          </TransactionsPDF>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
