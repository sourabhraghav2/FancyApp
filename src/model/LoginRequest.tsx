import { HttpRequest, HttpResponse } from "./generic";

export interface LoginRequest  extends HttpRequest{
    username:string,
    password:string
}
export interface LoginResponse extends HttpResponse {
    jwtTokken:string
}