import { createStore,Store,useStore as baseUseStore } from 'vuex'
// 持久化插件
import createPersistedState from "vuex-persistedstate"
import { store as user,userState } from "@/store/modules/user"

export interface RootState {
    user: userState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store:Store<RootState> = createStore({
    modules: {
        user
    },
    plugins: [
        createPersistedState({
            paths: ['user']
        })
    ]
})

export function useStore() {
    return baseUseStore(key)
  }