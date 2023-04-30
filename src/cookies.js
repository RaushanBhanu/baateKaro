import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const removeCookies = (name) => {
  if (!name) {
    return;
  }
  return cookies.remove(name);
};

export const getCookies = (id) => {
  if (!id) return;
  try {
    const ans = cookies.get(id);
    if (typeof ans == "string") {
      return JSON.parse(ans);
    }
    return ans;
  } catch (error) {
    console.log(error, "in getCookies");
  }
};
