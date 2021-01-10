import {CookiesHelper}  from "./cookieHelper";
const cookieService=CookiesHelper()

const inMemoryJWTManager = () => {
    const getToken = () => cookieService.readCookie('jwt');
    const setToken = (tokken:string) => {
        cookieService.createCookie('jwt', tokken,1);
        return true;
    };
    const ereaseToken = () => {
        cookieService.eraseCookie('jwt')
        return true;
    }
    return {
        ereaseToken,
        getToken,
        setToken
    }
};


export default inMemoryJWTManager();