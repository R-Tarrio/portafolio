import Profile from "../../utils/Profile.js"
export default {
    setProfile(context, payload){
        var profile = new Profile(payload);
        context.commit("setProfile", profile);
    }
}