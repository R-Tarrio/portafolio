import Profile from "../../utils/Profile.js"
import Networks from "../../utils/Networks.js"
export default {
    setProfile(context, payload){
        var profile = new Profile(payload);

        if(payload.NETWORKS){
            profile.setNetworks(new Networks(payload.NETWORKS));
        }

        context.commit("setProfile", profile);
    }
}