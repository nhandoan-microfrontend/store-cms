import {ActionTree, ModuleTree, MutationTree} from "vuex";
import {UserLoginInfo} from "@/models/UserModels";
import {userLogin} from "@/services/loginServices";
import {LOCAL_STORAGE_KEY} from "@/common/localStorage";

interface AuthState {
    token: string
}

const initialState: AuthState = {
    token: localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) || '',
}

const getters = {

}

const mutations: MutationTree<AuthState> = {
    setToken: (state, token: string) => {
        state.token = token;
    }
}

const actions: ActionTree<AuthState, any> = {
    authLogin: async ({commit}, userInfo: UserLoginInfo) => {
        try {
            const {token} = await userLogin(userInfo);
            commit('setToken', token);
            localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);
        }
        catch (error) {
            console.log(error);
        }
    },
    clearToken: async ({commit}) => {
        localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
        commit('setToken', '');
    }
}

export default {
    namespaced: true,
    state: {
        ...initialState,
    },
    mutations,
    actions,
    getters
} as ModuleTree<AuthState>
