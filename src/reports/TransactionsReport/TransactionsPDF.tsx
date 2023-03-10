import { currencyFormatter, dateFormatter } from '../../utils/formatter';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import {
  Content,
  DynamicContent,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

import { useTransactions } from '../../hooks/useTransactions';
import { FilePdf } from 'phosphor-react';
import { DropdownMenuItem } from './styles';
import { useCallback, useEffect, useState } from 'react';

export function TransactionsPDF() {
  const { transactions, summary } = useTransactions();

  const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

  function handleTransactionPDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle: DynamicContent | Content | undefined = [
      {
        text: 'Transações',
        fontSize: 15,
        bold: true,
        margin: [30, 20, 0, 45],
      },
    ];

    const dados = transactions.map((transaction) => {
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

    const summaryData = [
      [
        { text: 'Total Crédito', style: 'subheader', fontSize: 10, bold: true },
        { text: 'Total Débito', style: 'subheader', fontSize: 10, bold: true },
        {
          text: 'Total',
          style: 'subheader',
          fontSize: 10,
          alignment: 'right',
          bold: true,
        },
      ],
      [
        {
          text: currencyFormatter.format(summary.totalCredited / 100),
          fontSize: 9,
          margin: [0, 2, 0, 2],
        },
        {
          text: currencyFormatter.format(summary.totalDebited / 100),
          fontSize: 9,
          margin: [0, 2, 0, 2],
        },
        {
          text: currencyFormatter.format(summary.total / 100),
          fontSize: 9,
          margin: [0, 2, 0, 2],
          alignment: 'right',
        },
      ],
    ];

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
            ...summaryData,
          ],
        },
        layout: {
          hLineColor: function (
            i: number,
            node: { table: { body: string | any[] } },
          ) {
            return i === 0 ||
              i === node.table.body.length - 2 ||
              i === node.table.body.length
              ? 'black'
              : 'gray';
          },
          vLineStyle: function (_i: number, _node: any) {
            return { dash: { length: 2, space: 4 } };
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

    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];

    pdfMake.createPdf(docDefinitios).download(`relatorio-${myDate}`);
  }

  return (
    <DropdownMenuItem asChild>
      <button type="button" onClick={handleTransactionPDF}>
        <FilePdf size={32} />
      </button>
    </DropdownMenuItem>
  );
}
