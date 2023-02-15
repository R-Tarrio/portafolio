import state from './moduloUserState.js'
import mutations from './moduloUserMutations.js'
import actions from './moduloUserActions.js'
import getters from './moduloUserGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
