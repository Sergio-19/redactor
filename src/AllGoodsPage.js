import { useState } from "react"

import RenderTable from "./RenderTable"

const AllGoodsPage = ({goods, getCurrent, clearCurrent,  currentKey, currentValue, currentGood, saveGood, changeValue}) => {


    const [modal, setModal] = useState(false)


   async function openModal(el, good) {
     getCurrent(el, good)
     await setTimeout(()=> {
          setModal(true) 
        },500)
        
        

    }

    function closeModal() {
        setModal(false)
        clearCurrent()
    }


    function saveGoodAndClose(good, goods, key, value) {
        saveGood(good, goods, key, value)
        setModal(false)
    }


    const cl = ["modal__wrap"]
    if(modal){
        cl.push('modal-show')
    }

    const classes = ['blur']
    if(modal) {
        classes.push('show-blur')
    }

    return(
        <div className="allgoods__wrap">
            <div className= {cl.join(' ')}>
                <div className="modal-head">
                    <div ><strong>{currentGood.article}</strong><span>{currentKey}</span></div>
                    <h3>Редактор полей</h3>
                </div>
                
                <div className="modal-text">
                    <textarea value={currentValue} onChange = {(event)=> changeValue(event.target.value)}></textarea>
                </div>
                <div className="modal-btn">
                <button onClick = {closeModal}>Закрыть</button>
                    <button onClick = {()=> saveGoodAndClose(currentGood, goods, currentKey, currentValue)}>Сохранить</button>
                </div>
            </div>
            <div className={classes.join(' ')}></div>
            <h1>Страница редактирования товаров</h1>
            <div className="table__wrap">
            <div className="table-row start-row">
            <div className="table-cell start-cell"><span>Номер</span></div>
            <div className="table-cell start-cell"><span>Артикул</span></div>
            <div className="table-cell start-cell"><span>Название</span></div>
            <div className="table-cell start-cell"><span>Цена</span></div>
            <div className="table-cell start-cell"><span>Старая цена</span></div>
            <div className="table-cell start-cell"><span>Описание</span></div>
            <div className="table-cell start-cell"><span>Короткое описание</span></div>
            <div className="table-cell start-cell"><span>Характеристики</span></div>
            <div className="table-cell start-cell"><span>Фото</span></div>
            <div className="table-cell start-cell"><span>Категория</span></div>
            </div>
            {goods ? Object.keys(goods).map((good, i)=> {
                return <RenderTable key = {i} 
                                    click = {openModal}
                                    article = {goods[good].article}
                                    name = {goods[good].name}
                                    price = {goods[good].price}
                                    oldprice = {goods[good].oldprice}
                                    description = {goods[good].description}
                                    shortdescription = {goods[good].shortdescription}
                                    characteristics = {goods[good].characteristics}
                                    images = {goods[good].images}
                                    catid  = {goods[good].catid}
                                    number = {i}
                                    goodArticle = {good}
                                    good = {goods[good]}
                />
            }) : <></>} 
            </div>
        </div>
    )
}



export default AllGoodsPage