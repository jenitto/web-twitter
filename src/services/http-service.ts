import axios from "axios";

export const httpGet = <T, S>(url: string, params?: S): Promise<T> =>
  axios(url, {
    method: "GET",
    params,
  }).then((res) => res.data);
