/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * helper
 *
 * @author rensiwei
 * @date 2022-12-19
 */

import debounce from 'lodash/debounce';

/**
 * Generate random string with specified length, default is 6, max is 64
 */

export function genRandomString(mytoken?: string, len?: any) {
  const DEFAULT_TOKEN = '0123456789qwertyuioplkjhgfdsazxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ@#$'; // %&
  const DEFAULT_LEN = 6;
  const MAX_LEN = 64;
  if (!mytoken) {
    mytoken = DEFAULT_TOKEN;
    len = DEFAULT_LEN;
  } else if (!len) {
    if (typeof mytoken === 'number') {
      len = mytoken;
      mytoken = DEFAULT_TOKEN;
    } else {
      len = DEFAULT_LEN;
    }
  }
  len = len > MAX_LEN ? MAX_LEN : len;
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    randomStr += mytoken.charAt(Math.ceil(Math.random() * 100000000) % mytoken.length);
  }
  return randomStr;
}

export const encodeBase64 = (str: string) => btoa(encodeURIComponent(str));
export const decodeBase64 = (str: string) => decodeURIComponent(atob(str));

export const validateUserInfo = debounce(async (value, cb, dispatch, user, pre) => {
  const pre_text = {
    phone: '手机号',
    email: '邮箱',
  }[pre]
  try {
    const res = await dispatch({
      type: 'validate/exist',
      payload: {
        body: {
          [pre]: value,
          username: user.username,
        },
      },
    });
    return cb();
  } catch (error) {
    if (error?.response?.code === 409) {
      return cb(new Error(pre_text + '重复'));
    }
    return cb(new Error('校验失败'));
  }
}, 1000)
