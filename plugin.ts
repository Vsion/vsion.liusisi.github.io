/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * index of plugin
 *
 * @author rensiwei
 * @date 2023-03-27
 */

import { IApi } from '@umijs/max';
const isProd = process.env.UMI_ENV === 'prod';

export default (api: IApi) => {
  api.modifyHTML($ => {
    // $('head').prepend([
    //   `<script src='${isProd ? '/vsion.liusisi' : ''}/config.js?d=${(function () {
    //     return new Date().getTime();
    //   })()}'></script>`,
    // ]);
    return $;
  });
};
