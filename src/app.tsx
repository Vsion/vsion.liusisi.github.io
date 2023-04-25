/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2022 xxx. All Rights Reserved.
 */

/**
 * 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等
 *
 * @author rensiwei
 * @date 2023-01-04
 */

import React from 'react';
import { RuntimeAntdConfig, history } from '@umijs/max';
import { Modal } from 'antd';
import { setAutoFreeze } from 'immer';
import { ConfigProvider } from 'antd';
import theme from '../config/theme';
import { setAuthData } from '@/utils/authData';

(window as any).__CUSTOM_CONFIG_PROPS__ = {
  theme,
};
ConfigProvider.config({
  theme,
});

const no_layout_pages = ['/login'];

// 默认禁用冻结对象
setAutoFreeze(false);

const qiankunState = Object.create({
  slave: {},
});

export const modifyContextOpts = {
  historyOpts: {},
};

// 自定义 dva 配置
let alertHasBeenDisplayed = false;
export const dva = {
  config: {
    onError(e) {
    },
  },
  plugins: [
    //
  ],
};

// export const layout: RunTimeLayoutConfig = () => {
// };

export const antd: RuntimeAntdConfig = memo => {
  return memo;
};

export async function getInitialState() {
  return {};
}
