export enum ScreenType{
    LOGIN_FORM,
    CREATE_ACCOUNT_FORM,
    CHANGE_LANGUAGE_FORM,
    SECURITY_MODIFICATION
}

export enum Language {
    ENGLISH="English",
    CHINESE="Chinese",
    FRENCH="French",
    GERMAN="German",
    JAPNESE="Japnese",
    KOREAN="Korean",
    THAI="Thai",
}
export enum Privacy {
    PUBLIC="Public",
    PRIVATE="Private",
}
export  const emailValidationPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

export const INVALID_EMAIL="Invalid email!"
export const PASSWORD_NOT_SAME="Please enter same password!"
export const EMPTY=""
export const LOGIN_FAILED="Login failed!!"
export const USERNAME_PASSWORD_NOT_FILLED='Enter username and password'
export const NETWORK_DOWN='Network issue try again'
export const BACKEND_URL='http://localhost:3020/'
  