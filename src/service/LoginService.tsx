import { ChangePasswordRequest, ChangePasswordResponse } from "model/changePassword";
import { CreateAccountRequest, CreateAccountResponse } from "model/createAccount";
import { LanguageChangeRequest, LanguageChangeResponse } from "model/languageModel";
import { LoginRequest, LoginResponse } from "model/LoginRequest";
import HttpService from "util/HttpUtil";


export class LoginService {
    service=HttpService()        

    async attamptLogin(request: LoginRequest): Promise<LoginResponse> {
        console.log ('inside : attamptLogin')
        return await this.service.post(request,'login') as LoginResponse
    }

    async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
        console.log ('inside : changePassword')
        return await this.service.post(request,'changePassword') as ChangePasswordResponse
        
    }
    async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
        console.log ('inside : createAccount')
        return await this.service.post(request,'create') as CreateAccountResponse

    }
    async languageChange(request: LanguageChangeRequest): Promise<LanguageChangeResponse> {
        console.log ('inside : languageChange')
        return await this.service.post(request,'languageChange') as LanguageChangeResponse

    }
  
    async logout(): Promise<boolean> {
        console.log ('inside : logout')
        return await this.service.get('logout')

    }
    async delete(): Promise<boolean> {
        console.log ('inside : delete')
        return await this.service.get('delete')
    }

}