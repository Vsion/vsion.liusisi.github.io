/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * index of utils
 *
 * @author rensiwei
 * @date 2023-01-05
 */
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import duration from 'dayjs/plugin/duration';
dayjs.locale('zh-cn');

dayjs.extend(relativeTime); // support fromNow
dayjs.extend(updateLocale);
dayjs.extend(duration); // support during

dayjs.updateLocale('zh-cn', {
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '%d 秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年',
  },
});
