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
import { TransactionsPDF } from './TransactionsPDF';

export function TransactionsReport() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <DownloadSimple size={28} weight="bold" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          <TransactionsPDF />

          <DropdownMenuSeparator />

          {/* <TransactionsCSV /> */}

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
