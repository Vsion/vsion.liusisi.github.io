/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * service of users
 *
 * @author rensiwei
 * @date 2023-02-07
 */

import API_CONFIG from '../../config/api';
const { consoleApiUrl } = API_CONFIG;
const request = () => {}

export function getCurrentUser(payload) {
  return request({
    url: `${consoleApiUrl}/users/detail`,
  });
}

export function patchUserInfo({ body }) {
  return request({
    url: `${consoleApiUrl}/users`,
    options: {
      method: 'PATCH',
      body,
    },
  });
}

export function login({ body }) {
  return request({
    url: `${consoleApiUrl}/users/login`,
    options: {
      method: 'POST',
      body,
    },
  });
}

export function signup({ body }) {
  return request({
    url: `${consoleApiUrl}/users/register`,
    options: {
      method: 'POST',
      body,
    },
  });
}

export function resetPwVerifyCode({ body }) {
  return request({
    url: `${consoleApiUrl}/users/code`,
    options: {
      method: 'POST',
      body,
    },
  });
}

export function resetPw({ body }) {
  return request({
    url: `${consoleApiUrl}/users/reset`,
    options: {
      method: 'POST',
      body,
    },
  });
}
