import styled from '@emotion/styled';
import TableCustom from 'components/Table/Table';
import InputCustom from 'components/Input/Input';

export const Table = styled(TableCustom)`
  & > textarea {
    height: 150px !important;
    margin-bottom: 20px;
  }

  .ant-table-row {
    cursor: pointer !important;
    background-color: red !important;
  }
`;

export const Input = styled(InputCustom)``;
