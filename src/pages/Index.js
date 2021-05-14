import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Layout, Menu, Breadcrumb } from 'antd';

function Index({ children }) {
  // eslint-disable-next-line no-unused-vars
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className='layout'>
      <Header>Header</Header>
      <Content style={{ padding: '100px 50px' }}>
        <div className='site-layout-content'>{children}</div>
      </Content>
    </Layout>
  );
}

Index.propTypes = {
  children: PropTypes.node,
};

export default Index;
