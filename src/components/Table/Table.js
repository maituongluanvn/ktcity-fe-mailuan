import React from 'react';
import PropTypes from 'prop-types';
import Table from 'antd/lib/table/Table';
import Pagination from 'antd/lib/pagination';

function TableCustom({
  dataSource,
  columns,
  total,
  handleChangePage,
  currentPage,
}) {
  const _handleChangePage = e => {
    handleChangePage(e - 1);
  };

  const pageSize = 5;

  return (
    <>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
      <Pagination
        onChange={_handleChangePage}
        total={total}
        showSizeChanger={false}
        pageSize={pageSize}
        defaultCurrent={1}
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
