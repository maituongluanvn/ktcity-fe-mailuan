import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'antd/lib/pagination';

function PaginationCustom({ total, handleChangePage, currentPage, pageSize }) {
  const _handleChangePage = e => {
    handleChangePage(e - 1);
  };

  return (
    <Pagination
      onChange={_handleChangePage}
      total={total}
      showSizeChanger={false}
      pageSize={pageSize}
      defaultCurrent={currentPage + 1}
      current={currentPage + 1}
      currentPage={currentPage}
    />
  );
}

PaginationCustom.propTypes = {
  total: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  handleChangePage: PropTypes.func,
};

PaginationCustom.defaultProps = {
  pageSize: 5,
};

export default PaginationCustom;
