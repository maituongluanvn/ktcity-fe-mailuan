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
    handleChangePage(e);
  };

  const pageSize = 5;

  return (
    <>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
      <Pagination
        onChange={_handleChangePage}
        defaultCurrent={currentPage + 1}
        total={total - pageSize}
        showSizeChanger={false}
        pageSize={pageSize}
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
