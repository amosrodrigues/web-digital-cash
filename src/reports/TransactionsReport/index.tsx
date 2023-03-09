import { DownloadSimple, FileCsv, FilePdf } from 'phosphor-react';
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
import { TransactionsCSV } from './TransactionsCSV';
import { transactionsPDF } from './transactionsPDF';

export function TransactionsReport() {
  const { transactions, summary } = useTransactions();

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <DownloadSimple size={28} weight="bold" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <button
              type="button"
              onClick={async () =>
                await transactionsPDF(transactions, summary)
              }>
              <FilePdf size={32} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <TransactionsCSV>
            <DropdownMenuItem asChild>
              <button type="button">
                <FileCsv size={32} />
              </button>
            </DropdownMenuItem>
          </TransactionsCSV>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
