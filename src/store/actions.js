import axios from 'axios'
import { GET_NEWS } from './types'


const apiKey = 'pub_13664cd2f340c21f2b8e3321f73e4ccf85e26'
const baseUrl = 'https://newsdata.io/api/1/news?'

export const getNews = () => {
    return async dispatch => {
        const response = await axios.get(`${baseUrl}apikey=${apiKey}&country=ru`)
        dispatch({type: GET_NEWS, payload: response.data.results})
    }
}