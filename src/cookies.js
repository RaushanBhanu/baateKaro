import { Cookies } from "react-cookie";

const cookies = new Cookies()

export const removeCookies = (name)=>{
    if (!name) {
        return
    }
    return cookies.remove(name)
}