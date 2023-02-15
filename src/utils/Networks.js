export default class Networks {
    FACEBOOK = "#";
    TWITTER = "#";
    PINTEREST = "#";
    INSTAGRAM = "#";
    GITLAB = "#";
    URL_FACEBOOK = "https://www.facebook.com/";

    constructor(data){
        try {
            if(!data){
                return false;
            }

            Object.keys(data).forEach(a=>{
                this[a] = data[a];
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    get _FACEBOOK(){
        return this.FACEBOOK;
    }

    get LINK_FACEBOOK(){
        return `${this.URL_FACEBOOK}${this.FACEBOOK}`;
    }

    set _FACEBOOK(valor){
        if(/^https?:\/\/.*facebook/.test(valor)){
            var array = valor.split(/(?:facebook.com\/)(.*)\/?/);
            if(typeof array[1] !== "undefined"){
                valor = array[1].split("/")[0]
            }
        }
        this.FACEBOOK = valor;
    }
    

}