import Translation from "language/LanguageModel";
import { ChangePasswordRequest, ChangePasswordResponse } from "model/changePassword";
import { CreateAccountRequest, CreateAccountResponse } from "model/createAccount";
import { LanguageChangeRequest, LanguageChangeResponse } from "model/languageModel";
import { LoginRequest, LoginResponse } from "model/LoginRequest";
import HttpService from "util/HttpUtil";


export class Service {
    service=HttpService()        

    async getLanguage(language: String): Promise<Translation> {
        console.log ('inside : attemptLogin')
        const url=`languages/getLanguage/${language}`
        const resp= await this.service.get(url) 
        var inputMap:Map<number,String>=new Map();
        if(resp.isSuccess && resp.data){
            for (var key in resp.data) {
                inputMap.set(parseInt(key),resp.data[key])
            }
        }
        return new Translation(inputMap)
    }
    async attemptLogin(request: LoginRequest): Promise<LoginResponse> {
        console.log ('inside : attemptLogin')
        return await this.service.post(request,'users/login') as LoginResponse
    }
    async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
        console.log ('inside : changePassword')
        return await this.service.post(request,'users/update') as ChangePasswordResponse
    }
    async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
        console.log ('inside : createAccount')
        return await this.service.post(request,'users/create') as CreateAccountResponse
    }
    async languageChange(request: LanguageChangeRequest): Promise<LanguageChangeResponse> {
        console.log ('inside : languageChange')
        return await this.service.post(request,'users/update') as LanguageChangeResponse
    }
    async logout(): Promise<boolean> {
        console.log ('inside : logout')
        return await this.service.get('users/update')
    }
    async delete(username:string): Promise<boolean> {
        console.log ('inside : delete')
        return await this.service.get(`users/delete/${username}`)
    }

}