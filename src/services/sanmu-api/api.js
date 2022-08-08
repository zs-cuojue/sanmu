// @ts-ignore

/* eslint-disable */
import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

/** 测试接口 /api/totalSales */
export async function getTotalSales(params, options) {
  return request('/api/totalSales/', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

export async function getUserInfo(params, options) {
  return request('/api/userInfo/', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
