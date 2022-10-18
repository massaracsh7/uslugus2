import {CustomError} from "./CustomError";

export const postData = async (url, data, method='POST') => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(data),
    })
    if (response.ok) {
      return await response.json();
    } else {
      throw CustomError(await response.json());
    }
  } catch (e) {
    return e.data || e;
  }
}
