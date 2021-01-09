import { HttpRequest, HttpResponse } from "./generic";

export interface CreateAccountRequest extends HttpRequest {
    username:string,
    password:string
}
export interface CreateAccountResponse  extends HttpResponse{
    
    jwtToken:string
}