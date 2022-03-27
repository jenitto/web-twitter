import axios from "axios";

export const httpGet = <T>(url: string): Promise<T> =>
  axios(url, {
    method: "GET",
  }).then((res) => res.data);
