import http from '@/service/http'
import * as T from './type'

const loginApi: T.LoginApi = {
    login(params:T.LoginParams){
        return http.post('/login', params)
    }

}
export default loginApi
