import {get} from '@/utils/interceptor'

export const getExample = (payload) => {
    return get('/example', payload)
}