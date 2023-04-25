/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2022 xxx. All Rights Reserved.
 */

/**
 * Basic Layout
 *
 * @author rensiwei
 * @date 2022-12-19
 */

import React from 'react';
import { Outlet, useLocation, Helmet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';

const BasicLayout: React.FC = props => {
  const location = useLocation();
  const locale = zhCN;
  return (
    <ConfigProvider locale={locale}>
      <Helmet>
        <title>视频超算</title>
      </Helmet>
      <Outlet />
    </ConfigProvider>
  );
};

export default BasicLayout;
