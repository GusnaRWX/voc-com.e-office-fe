import {get, post} from '@/utils/interceptor'

export const getLetters = (payload) => {
    return get(`letters`, {params: payload})
}

export const postLetter = (payload) => {
    return post('letters', payload)
}
