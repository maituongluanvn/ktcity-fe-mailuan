import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

function Index({ children }) {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className='layout'>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>{children}</div>
      </Content>
    </Layout>
  );
}

Index.propTypes = {
  children: PropTypes.node,
};

export default Index;
