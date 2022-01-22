import { Module } from "vuex"
import { RootState } from "../index"

export interface userState{
    counter: number
}

export const store:Module<userState,RootState> = {
    namespaced:true,
    state: ():userState => ({
        counter: 0
    }),
    mutations: {
        increment(state:userState,newVal:number):void{
            state.counter = newVal
        }
    }
}