import { HttpRequest, HttpResponse } from "model/generic";

export const HttpService=()=> {
   const baseUrl='http://localhost:8080/'
    const post=async(request:HttpRequest,to:string):Promise<HttpResponse>=>{
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(request)
                };
               return  await fetch(`${baseUrl}${to}`,requestOptions)
                .then(res => res.json())
                .then((data) => {
                    return data 
                })
                .catch(console.log) as HttpResponse
            } catch (e) {
                return {isSuccess:false} as HttpResponse;
            }
    }

    const get=async(to:string):Promise<boolean>=>{
        try {
            const response= await fetch(`${baseUrl}${to}` )
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch(console.log)
            console.log ('Response : ',JSON.stringify(response))
            return true
        } catch (e) {
            return false
        }
    }
    return {
        get,
        post
    }
}
export default HttpService