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
}) {
  const pageSize = 5;

  return (
    <>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
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
};

TableCustom.defaultProps = {
  dataSource: [],
};

export default TableCustom;
