import Networks from "./Networks.js"

export default class Profile {
    FIRST_NAME = "";
    LAST_NAME = "";
    DESCRIPTION = "";
    PROFESSION = "";
    PHONE = "";
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
    

}