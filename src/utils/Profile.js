import Networks from "./Networks.js"

export default class Profile {
    FIRST_NAME = "";
    LAST_NAME = "";
    DESCRIPTION = "";
    PROFESSION = "";
    PHONE = "";
    AGE = "";
    EMAIL = "";
    ADDRESS = "";
    PROFILE_PICTURE = "../../src/assets/images/profile-image-default.png"
    NETWORKS = new Networks();

    constructor(data){
        try {
            if(!data){
                return false;
            }

            Object.keys(data).forEach(a=>{
                if(a == "NETWORKS"){
                    this[a] = new Networks(data[a]);
                }else{
                    this[a] = data[a];
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    setNetworks(networks){
        if(networks.constructor.name == new Networks().constructor.name){
            this.NETWORKS = networks;
        }else{
            this.NETWORKS = new new Networks();
        }
    }

    setName(data){
        this.FIRST_NAME = data
    }

    get FULL_NAME(){
        return `${this.FIRST_NAME} ${this.LAST_NAME}`;
    }
    

}