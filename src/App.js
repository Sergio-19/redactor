import AddGoodPage from "./AddGoodPage"
import {Route, Routes, Link} from 'react-router-dom'
import AllGoodsPage from "./AllGoodsPage"
import HomePage from "./HomePage"
import { useEffect } from "react"
import { changeValueActionCreator, clearCurrentActionCreator, getCurrentActionCreator, loadGoods, saveChangeGood } from "./redux/mainReducer"
import { useDispatch, useSelector } from "react-redux/es/exports"


const App = () => {


   

    const {goods, currentKey, currentValue, currentGood} = useSelector((state)=> state.mainReducer)
    const dispatch = useDispatch()

    function getCurrent(el, good) {
        dispatch(getCurrentActionCreator(el, good))
    }

    function clearCurrent() {
        dispatch(clearCurrentActionCreator())
    }

    function saveGood(good, goods, key, value) {
        dispatch(saveChangeGood(good, goods, key, value))
    }

    function changeValue(value) {
        dispatch(changeValueActionCreator(value))
    }


 useEffect(()=> {
       dispatch(loadGoods())
    }, [])



    return(
        <div className="app">
            <h1>Консоль администратора</h1>
            <ul >
                <li><Link to = '/'>Главная</Link></li>
                <li><Link to = '/addgood'>Страница добавления товара</Link></li>
                <li><Link to = '/allgood'>Страница редактирования товаров</Link></li>
                
            </ul>
            <Routes>
                <Route path = '/' element = {<HomePage />}/>
                <Route path = '/addgood' element = {<AddGoodPage />}/>
                <Route path = '/allgood' element = {<AllGoodsPage goods = {goods}
                                                                  getCurrent = {getCurrent} 
                                                                  clearCurrent = {clearCurrent}
                                                                  currentKey = {currentKey}
                                                                  currentValue = {currentValue}
                                                                  currentGood = {currentGood}
                                                                  saveGood = {saveGood}
                                                                  changeValue = {changeValue}
                                                               
                />}/>
            </Routes>
        </div>
    )
}


export default App