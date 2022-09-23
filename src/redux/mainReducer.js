import axios from "axios"
const initialState = {
    goods: [],
    currentKey: '',
    currentValue: '',
    currentGood: {},
    notParse: {}
}



export function mainReducer(state = initialState, action) {
        switch(action.type) {
            case LOAD_GOODS:
                return {
                    ...state, goods: action.payload
                }

            case GET_CURRENT:
                 let good = {...action.good} 
                 let key = action.key
                 return {...state, currentKey: key, currentValue: good[key], currentGood: good}  
                 
            case CLEAR_CURRENT:
                return {...state, currentKey: '', currentValue: '', currentGood: {}} 
            
            case CHANGE_VALUE:
                return {...state, currentValue: action.value} 
                
            default:
                return state
        }
}


const LOAD_GOODS = 'LOAD_GOODS'



const GET_CURRENT = 'GET_CURRENT'
const CLEAR_CURRENT = 'CLEAR_CURRENT'

const SAVE_CHANGE_GOOD = 'SAVE_CHANGE_GOOD' 
const CHANGE_VALUE = 'CHANGE_VALUE'



export function changeValueActionCreator(value) {
        return {type: CHANGE_VALUE, value}
}

export function fetchGoodsActionCreator(payload) {
    return {type: LOAD_GOODS, payload}
}
   export function clearCurrentActionCreator() {
        return {type: CLEAR_CURRENT}
   } 

   export function getCurrentActionCreator(key, good) {
    return {type: GET_CURRENT, key, good}
}

export function saveChangeGoodActionCreator() {

}

async function saveGoodsServer(goods) {
    try{
        const response = await axios.post('http://localhost:3003/admin/update', goods)
        console.log(response.data)

    } catch(err) {
        console.log(err)
    }
}




export function saveChangeGood(good, goods, key, value) {
        return async (dispatch) => {
           const goodsArray = {...goods}
           good[key] = value
            goodsArray[good.article] = good
            dispatch(fetchGoodsActionCreator(goodsArray))
            dispatch(clearCurrentActionCreator())
            await saveGoodsServer(goodsArray)
            loadGoods()
        }
}




export function loadGoods() {
        return async (dispatch) => {
            const response = await axios('http://localhost:3003/admin/allgoods')
        let goodsArray = {}
        let goods = {...response.data.goods}
      
        Object.keys(goods).forEach((good)=> {
         
            goodsArray[good] = {...goods[good]}
        })

      

        dispatch(fetchGoodsActionCreator(goodsArray))
    }
}

