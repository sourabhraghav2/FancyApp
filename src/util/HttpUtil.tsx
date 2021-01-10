import { BACKEND_URL, NETWORK_DOWN } from "common/constants";
import { MessageProperties } from "components/useraccount/landingPage";
import { HttpRequest, HttpResponse } from "model/generic";
import inMemoryJWTManager from 'security/inMemoryJWTManager';

export const HttpService=()=> {
    const defaultErrorMessage={
        msg:NETWORK_DOWN,
        isSuccess:false
    } as MessageProperties
    const baseUrl=BACKEND_URL
    const post=async(request:HttpRequest,to:string):Promise<HttpResponse>=>{ 
        const jwtToken=inMemoryJWTManager.getToken()
        const Authorization=`Bearer ${jwtToken}`
        console.log ('Authorization: ',Authorization)
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' ,
                'Authorization':Authorization
            },
            body: JSON.stringify(request)
        };
        return  await fetch(`${baseUrl}${to}`,requestOptions)
        .then(res => res.json())
        .then((data) => {
            return data 
        })
        .catch(()=>{
            return defaultErrorMessage;
        })   
    }

    const get=async(to:string):Promise<any>=>{
        const jwtToken=inMemoryJWTManager.getToken()
        const Authorization=`Bearer ${jwtToken}`
        const url =`${baseUrl}${to}`
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 
                    Authorization
                }
            };
            const response= await fetch(url, requestOptions)
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch((e)=>{console.log('Error : ',e)
                return defaultErrorMessage})
            return response
        } catch (e) {
            return defaultErrorMessage
        }
    }
    return {
        get,
        post
    }
}
export default HttpService