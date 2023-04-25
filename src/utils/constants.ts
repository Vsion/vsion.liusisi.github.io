/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * constants
 *
 * @author zhangpc
 * @date 2018-05-24
 */

export const PHONE_REGEX = /^1[0-9]{10}$/;
export const EMAIL_REGEX = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
export const IS_PROD = process.env.UMI_ENV === 'prod';

export const audios: any = {
  before: '/before.wav',
  after: '/after.wav',
  0: '/0.wav',
  1: '/1.wav',
  2: '/2.wav',
  3: '/3.wav',
  4: '/4.wav',
  5: '/5.wav',
  6: '/6.wav',
  7: '/7.wav',
  8: '/8.wav',
  9: '/9.wav',
}
export const AUTH_DATA = 'authData';
export const SYSTEM_ADMIN = 'admin'; // 系统管理员
export const TENANT_ADMIN = 'tenant'; // 租户管理员
export const SITE_USER = 'site'; // 站点用户
export const VALIDATE_CAPTCHA_TIME = 'validate_captcha_time';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_PAGESIZE = 10;
export const URL_REGEX = /^(http[s]?):\/\/([\da-zA-Z\-][\.]?)+(:\d)?[\da-zA-Z\.\-\/]*$/;
export const HOST_REGEX = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
export const IP_REGEX =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
export const IP_PORT_REGEX =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
