import axiosInstance from "@/services/axiosInstance";
import {UserLoginInfo} from "@/models/UserModels";


export const userLogin = async (userInfo: UserLoginInfo) => {
    const { data } = await axiosInstance.post('/users/login', userInfo);
    return data;
}
