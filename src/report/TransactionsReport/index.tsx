import { DownloadSimple, FileCsv, FilePdf } from 'phosphor-react';

import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuArrow,
  DropdownMenuSeparator,
} from './styles';

export function TransactionsReport() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <DownloadSimple size={28} weight="bold" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <button>
              <FilePdf size={32} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <button>
              <FileCsv size={32} />
            </button>
          </DropdownMenuItem>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
