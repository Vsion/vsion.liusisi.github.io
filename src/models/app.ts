/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2022 xxx. All Rights Reserved.
 */

/**
 * model of app
 *
 * @author rensiwei
 * @date 2022-12-20
 */

import { Effect } from '@umijs/max';
import {
  getCurrentUser,
  login,
  patchUserInfo,
  signup,
  resetPwVerifyCode,
  resetPw,
} from '../services/app';
import { setAuthData, getAuthData } from '@/utils/authData';

export interface AppStateType {}

export interface AppModelType {
  namespace: 'app';
  state: AppStateType;
  effects: {
    login: Effect;
    signup: Effect;
    resetPwVerifyCode: Effect;
    resetPw: Effect;
    getCurrentUser: Effect;
    removeCurrentUser: Effect;
    setLocal: Effect;
    patchUserInfo: Effect;
  };
  reducers: {
    updateState: any;
  };
}

const AppModel: AppModelType = {
  namespace: 'app',
  state: {
    user: getAuthData()?.user,
    compony: getAuthData()?.compony,
    local_username: getAuthData()?.username,
    local_password: getAuthData()?.password,
    local_login: localStorage?.login === 'true',
  },
  effects: {
    *login({ payload }, { select, call, put }) {
      const auth = yield call(login, payload);
      setAuthData(auth);
      return auth;
    },
    *resetPwVerifyCode({ payload }, { select, call, put }) {
      const auth = yield call(resetPwVerifyCode, payload);
      return auth;
    },
    *resetPw({ payload }, { select, call, put }) {
      const auth = yield call(resetPw, payload);
      return auth;
    },
    *signup({ payload }, { select, call, put }) {
      const auth = yield call(signup, payload);
      return auth;
    },
    *removeCurrentUser(_, { select, call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          // user: {},
          // company: {},
          local_login: false,
        },
      });
    },
    *setLocal(payload, { select, call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          // local_username: '',
          // local_password: '',
          // local_login: '',
          ...(payload?.payload || {})
        },
      });
    },
    *getCurrentUser(_, { select, call, put }) {
      const res = yield call(getCurrentUser);
      const payload = {
        user: {
          ...(res?.user || {}),
        },
        company: res?.company,
      };
      yield put({
        type: 'updateState',
        payload,
      });
      return res;
    },
    *patchUserInfo({ payload }, { call }) {
      const res = yield call(patchUserInfo, payload);
      return res;
    },
  },
  reducers: {
    // 启用 immer 之后
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default AppModel;
