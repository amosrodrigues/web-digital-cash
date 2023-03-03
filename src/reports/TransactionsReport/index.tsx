import { DownloadSimple, FileCsv, FilePdf } from 'phosphor-react';
import { useTransactions } from '../../hooks/useTransactions';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuArrow,
  DropdownMenuSeparator,
} from './styles';
import { Transaction } from '../../context/Transactions';
import { currencyFormatter, dateFormatter } from '../../utils/formatter';
import {
  Content,
  DynamicContent,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

export function TransactionsReport() {
  const { transactions } = useTransactions();
  function transactionsPDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle: DynamicContent | Content | undefined = [
      {
        text: 'Transações',
        fontSize: 15,
        bold: true,
        margin: [30, 20, 0, 45],
      },
    ];

    const dados = transactions.map((transaction: Transaction) => {
      return [
        {
          text: dateFormatter.format(new Date(transaction.createdAt)),
          fontSize: 9,
          margin: [0, 2, 0, 2],
        },
        {
          text: transaction.type === 'credited' ? 'Crédito' : 'Débito',
          fontSize: 9,
          margin: [0, 2, 0, 2],
        },
        {
          text: `${currencyFormatter
            .format(transaction.value / 100)
            .replace('R$', '')} ${transaction.type === 'debited' ? 'D' : 'C'} `,
          fontSize: 9,
          margin: [0, 2, 0, 2],
          alignment: 'right',
        },
      ];
    });

    const details = [
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            [
              { text: 'Data Mov.', style: 'tableHeader', fontSize: 10 },
              { text: 'Tipo', style: 'tableHeader', fontSize: 10 },
              {
                text: 'Valor',
                style: 'tableHeader',
                fontSize: 10,
                alignment: 'right',
              },
            ],
            ...dados,
          ],
        },
        layout: {
          fillColor: function (rowIndex: number) {
            return rowIndex % 2 === 0 ? '#CCCCCC' : null;
          },
        },
      },
    ];

    const footer: DynamicContent | Content | undefined = (
      currentPage: number,
      pageCount: number,
    ) => {
      return [
        {
          text: `${currentPage} / ${pageCount}`,
          alignment: 'right',
          fontSize: 9,
          bold: true,
          margin: [0, 10, 20, 0],
        },
      ];
    };

    const docDefinitios: TDocumentDefinitions = {
      pageSize: 'A4',
      pageMargins: [30, 50, 30, 40],
      header: [reportTitle],
      content: [details],
      footer,
    };

    pdfMake.createPdf(docDefinitios).open();
  }

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <DownloadSimple size={28} weight="bold" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <button onClick={transactionsPDF}>
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
