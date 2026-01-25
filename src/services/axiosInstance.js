import axios from 'axios'
import store from '../store'
import {changeLoader} from '../store/slices/louder'


export const axiosInstance=axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
      api_key:'56fd3d3bd8b01e391dab7babe454d6bb',
    }
})


axiosInstance.interceptors.request.use((req)=>{
  store.dispatch(changeLoader(true))
  return req
},(err)=>{
  return Promise.reject(err)
})


axiosInstance.interceptors.response.use((res)=>{
  store.dispatch(changeLoader(false))
  return res
},(err)=>{
  return Promise.reject(err)
})