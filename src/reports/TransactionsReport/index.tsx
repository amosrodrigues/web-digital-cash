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
import { TransactionsPDF } from './TransactionsCSV';
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
            <button onClick={() => transactionsPDF(transactions, summary)}>
              <FilePdf size={32} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <TransactionsPDF>
            <DropdownMenuItem asChild>
              <button>
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
