import axios from "axios";

export const httpGet = <T, S>(url: string, params?: S): Promise<T> =>
  axios(url, {
    method: "GET",
    params,
  }).then((res) => res.data);

export const httpPut = <T, S>(url: string, data: S): Promise<T> =>
  axios(url, {
    method: "PUT",
    data,
  }).then((res) => res.data);

export const httpPost = <T, S>(url: string, data: S): Promise<T> =>
  axios(url, {
    method: "POST",
    data,
  }).then((res) => res.data);
