import styled from '@emotion/styled';
import TableCustom from 'components/Table/Table';

export const Table = styled(TableCustom)`
  & > textarea {
    height: 150px !important;
    margin-bottom: 20px;
  }
`;