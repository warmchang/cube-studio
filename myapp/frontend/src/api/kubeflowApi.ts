import { AxiosResponse } from 'axios'
import axios, { AxiosResFormat } from '.'
import { IADUGTemplateInfo, IAppMenuItem, ICustomDialog } from './interface/kubeflowInterface'
const BASE_URL = 'http://localhost/' || 'http://kubeflow.tke.woa.com'


export const getAppMenu = (): Promise<AxiosResponse<IAppMenuItem[]>> => {
    return axios.get('/myapp/menu')
}

export const getADUGTemplateApiInfo = (url?: string, id?: string): Promise<AxiosResponse<IADUGTemplateInfo>> => {
    return axios.get(`${url || ''}_info`, {
        params: {
            id
        }
    })
}

export const getCustomDialog = (url: string): Promise<AxiosResponse<ICustomDialog>> => {
    return axios.get(`/myapp/feature/check?url=${url}`)
}

export const getADUGTemplateList = (url?: string, params?: any): AxiosResFormat<any> => {
    return axios.get(url || '', { params })
}

export const getADUGTemplateDetail = (url: string): AxiosResFormat<any> => {
    return axios.get(`${url}`, {
        params: {
            form_data: {
                str_related: 1
            }
        }
    })
}

export const actionADUGTemplateAdd = (url?: string, params?: {}): AxiosResFormat<any> => {
    return axios.post(url || '', params)
}

export const actionADUGTemplateUpdate = (url?: string, params?: {}): AxiosResFormat<any> => {
    return axios.put(url || '', params)
}

export const actionADUGTemplateDelete = (url?: string, params?: {}): AxiosResFormat<any> => {
    return axios.delete(url || '', { params })
}

export const actionADUGTemplateSingle = (url?: string): AxiosResFormat<any> => {
    return axios.get(url || '')
}

export const actionADUGTemplateMuliple = (url?: string, params?: { ids: any[] }): AxiosResFormat<any> => {
    return axios.post(url || '', params)
}