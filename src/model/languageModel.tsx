import { Language, Privacy } from "common/constants";
import { HttpRequest, HttpResponse } from "./generic";

export interface LanguageChangeRequest  extends HttpRequest{
    language:Language,
    privacy:Privacy
    username:string    
}
export interface LanguageChangeResponse extends HttpResponse{
}