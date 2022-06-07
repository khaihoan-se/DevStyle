import ACTIONS from ".";
import axios from "axios";

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}
export const fetchUser = async (token: any) => {
    const res = await axios.get('/user/infor', {
        headers: {Authorization: token}
    })
    return res;
}

export const dispatchGetUser = (res: any) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}