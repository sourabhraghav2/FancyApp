import { HttpRequest, HttpResponse } from "./generic";

export interface LanguageChangeRequest  extends HttpRequest{
    language:string,
    privacy:string
}
export interface LanguageChangeResponse extends HttpResponse{
    
}