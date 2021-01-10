
export default  class Translation {
    GENERAL:string;
    SECURITY:string;
    LOGOUT:string;

    FANCY_APP:string;
    EMAIL:string;
    EXAMPLE_EMAIL:string;
    PASSWORD:string;
    LOGIN:string;
    CREATE_NEW_ACCOUNT:string;

    LANGUAGE:string;
    PRIVACY:string;
    PUBLIC:string;
    PRIVATE:string;
    SAVE_CHANGES:string;

    CREATE_A_NEW_ACCOUNT:string;
    
    constructor(inputMap:Map<number,String>=new Map()){
        
        const defaultTranslationMap=this.defaultTranslation();
        const finalKeyVal=new Map();
        defaultTranslationMap.forEach((v,k) =>{
            finalKeyVal.set(k,inputMap.get(k)?inputMap.get(k):v)
        })

        this.GENERAL=finalKeyVal.get(1);
        this.SECURITY=finalKeyVal.get(2);
        this.LOGOUT=finalKeyVal.get(3);

        this.FANCY_APP=finalKeyVal.get(4);
        this.EMAIL=finalKeyVal.get(5);
        this.EXAMPLE_EMAIL=finalKeyVal.get(6);
        this.PASSWORD=finalKeyVal.get(7);
        this.LOGIN=finalKeyVal.get(8);
        this.CREATE_NEW_ACCOUNT=finalKeyVal.get(9);
        
        this.LANGUAGE=finalKeyVal.get(10);
        this.PRIVACY=finalKeyVal.get(11);
        this.PUBLIC=finalKeyVal.get(12);
        this.PRIVATE=finalKeyVal.get(13);
        this.SAVE_CHANGES=finalKeyVal.get(14);

        this.CREATE_A_NEW_ACCOUNT=finalKeyVal.get(15);

    }
     chineseTranslation=():Map<number,String>=>{
        const map=new Map ()
        map.set(1,"般")
        map.set(2,"安全")
        map.set(3,"登出")

        map.set(4,"花式应用")
        map.set(5,"电子邮件")
        map.set(6,"example@example.com")
        map.set(7,"密码")
        map.set(8,"登录")
        map.set(9,"建立新帐户")

        map.set(10,"语言")
        map.set(11,"隐私")
        map.set(12,"上市")
        map.set(13,"私人的")
        map.set(14,"保存更改")
        
        map.set(15,"创建一个新账户")
        
        return map    
    }

    defaultTranslation=():Map<number,String>=>{
        const map=new Map ()
        
        map.set(1,"General")
        map.set(2,"Security")
        map.set(3,"Logout")

        map.set(4,"Fancy App")
        map.set(5,"Email")
        map.set(6,"example@example.com")
        map.set(7,"Password")
        map.set(8,"Login")
        map.set(9,"Create new account")

        map.set(10,"Language")
        map.set(11,"Privacy")
        map.set(12,"Public")
        map.set(13,"Private")
        map.set(14,"Save Changes")

        map.set(15,"Create a new account")

        console.log('map :',map)
        return map    
    }
}