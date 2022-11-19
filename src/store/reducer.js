import { GET_NEWS, MOBILE_MENU} from "./types"

const initialState = {
    news: [],
    mobileMenu: false
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case GET_NEWS:
            return{
                ...state,
                news: payload,
                loading: false
            }
        case MOBILE_MENU:
            return{
                ...state,
                mobileMenu: !state.mobileMenu
            }
        default: return state
    }
}