import React from 'react';
import PropTypes from 'prop-types';
import Table from 'antd/lib/table/Table';
import Pagination from './Pagination';

function TableCustom({
  dataSource,
  columns,
  total,
  handleChangePage,
  currentPage,
  onRowClick,
}) {
  const pageSize = 5;

  return (
    <>
      <Table
        style={styled}
        dataSource={dataSource}
        pagination={false}
        columns={columns}
        onRow={record => {
          return {
            onClick: () => onRowClick(record),
          };
        }}
      />
      <Pagination
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        handleChangePage={handleChangePage}
      />
    </>
  );
}

TableCustom.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  total: PropTypes.number,
  currentPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  onRowClick: PropTypes.func,
};

TableCustom.defaultProps = {
  dataSource: [],
  onRowClick: () => {},
};

const styled = {
  cursor: 'pointer',
};

export default TableCustom;
