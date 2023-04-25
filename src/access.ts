/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2023 xxx. All Rights Reserved.
 */

/**
 * page access
 *
 * @author rensiwei
 * @date 2023-01-06
 */

export default function (initialState) {
  const default_access = {
    site: false,
    admin: false,
    tenant: false,
  };
  if (!initialState?.app?.user?.type) {
    return default_access;
  }
  return {
    ...default_access,
    [initialState?.app?.user?.type]: true,
  };
}
