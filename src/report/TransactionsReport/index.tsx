import {
  DownloadSimple,
  FileArrowDown,
  FileCsv,
  FilePdf,
} from 'phosphor-react';
import { ReportButton, ReportContainer } from './styles';

export function TransactionsReport() {
  return (
    <ReportContainer>
      {/* <ReportButton type="button">
        <FilePdf size={32} />
      </ReportButton>

      <ReportButton type="button">
        <FileCsv size={32} />
      </ReportButton> */}

      <DownloadSimple size={28} />
    </ReportContainer>
  );
}
