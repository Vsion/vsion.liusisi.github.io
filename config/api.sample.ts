/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2018 xxx. All Rights Reserved.
 */

/**
 * config
 *
 * @author rensiwei
 * @date 2023-01-06
 */

import { config } from '../public/config';
const isProd = process.env.UMI_ENV === 'prod';

declare global {
  interface Window {
    __INITIAL_CONFIG__: any;
  }
}

export default {
  // ...(isProd ? window.__INITIAL_CONFIG__ || {} : config), // todo: process.env.UMI_ENV === void 0 ?
  ...(window.__INITIAL_CONFIG__ || {}),
};
