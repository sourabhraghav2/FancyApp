import { HttpRequest, HttpResponse } from "./generic";

export interface ChangePasswordRequest extends HttpRequest {
    username:string,
    password:string
}
export interface ChangePasswordResponse extends HttpResponse {
}