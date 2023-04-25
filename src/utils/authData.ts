/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * authData utils
 *
 * @author rensiwei
 * @date 2023-02-07
 */

import { AUTH_DATA } from './constants';

export interface AuthData {
  token?: string;
  isusedAt?: string;
  expiresIn?: number;
  userID?: string;
  compony?: any; // 用户绑定公司信息
  user?: any; // 用户信息
  username?: any; // 写死到 config 的 username 用于展示
  password?: any; // 写死到 config 的 pwd 用于展示
  login?: any; // 标记是否需要登录
}

/**
 * get auth data
 *
 * @return {(AuthData | {})} 认证数据
 */
export const getAuthData = (): AuthData => {
  try {
    const authDataLocal: AuthData = JSON.parse(window.localStorage.getItem(AUTH_DATA) || '{}');
    // 如果 localStorage 中没有 authData 说明用户已经退出登录了，这里不能再使用 sessionStorage 中的 authData
    if (Object.keys(authDataLocal).length === 0) {
      return authDataLocal;
    }
    const authDataSession: AuthData = JSON.parse(window.sessionStorage.getItem(AUTH_DATA) || '{}');
    return Object.assign(authDataLocal, authDataSession);
  } catch (error) {
    console.warn('getAuthData failed', error);
    return {};
  }
};

export function setAuthData(data: AuthData) {
  localStorage.setItem(AUTH_DATA, JSON.stringify(data));
}

export function setCurrentAuthData(data: AuthData) {
  sessionStorage.setItem(AUTH_DATA, JSON.stringify(data));
  localStorage.setItem(AUTH_DATA, JSON.stringify(data));
}
