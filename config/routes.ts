/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2022 xxx. All Rights Reserved.
 */

/**
 * routes config
 *
 * @author rensiwei
 * @date 2022-12-19
 */

import { SITE_USER, SYSTEM_ADMIN, TENANT_ADMIN } from '../src/utils/constants';

interface Route {
  title?: boolean | string; // 是否显示 title, 默认 false
  noCard?: boolean; // 是否显示页面卡片, 默认 false

  // 其他 umi 扩展属性参考 no_layout_item
}

const no_layout_item: any = {
  // https://umijs.org/docs/max/layout-menu#%E6%89%A9%E5%B1%95%E7%9A%84%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE
  // 不展示顶栏
  // headerRender: false,
  // 不展示页脚
  footerRender: false,
  // 不展示菜单
  menuRender: false,
};

const routes: any = [
  // 没有 titile 不会展示在 layout.menu 中
  {
    path: '/',
    wrappers: ['@/layouts'],
    component: '@/pages',
  },
  { path: '/*', component: '@/pages/404' },
];

export default routes;
