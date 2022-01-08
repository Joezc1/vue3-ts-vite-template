import { Module } from "vuex"

export interface userState{
    counter: number
}

export const store:Module<userState> = {
    namespace:true,
    state: ():userState => ({
        counter: 0
    }),
    mutations: {
        increment(state:userState,newVal:number):void{
            state.counter = newVal
        }
    }
}