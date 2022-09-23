import { useState } from "react";
import axios from "axios";



const AddGoodPage = () => {

  function generatePassword(passLength){
    let length = passLength,
      charset = "0123456789";
      let res = '';
      for (let i = 0, n = charset.length; i < length; ++i) {
          res += charset.charAt(Math.floor(Math.random() * n));
      }
      return res;
  }



  const [name, setName] = useState('')
  const [article, setArticle] = useState(`${generatePassword(6)}`)
  const [price, setPrice] = useState(0)
  const [oldprice, setOldprice] = useState(0)
  const [description, setDescription] = useState('')
  const [shortdescription, setShortdescription] = useState('')
  const [characteristics, setCharacteristics] = useState('')
  const [images, setImages] = useState('')
  const [catid, setCatid] = useState('')

  const [message, setMessage] = useState('')

  function changeVar(x, func, e) {
      func(e.target.value)
  }

  function createMessage(mes) {
    setMessage(mes)
      setTimeout(()=> {
        setMessage('')
      }, 1000)
  }

  async function createGood(good) {
        const response = await axios.post('http://localhost:3003/admin/addgood', good)
        if(response.data.success) {
         await createMessage(response.data.message)
         window.location.href = '/'
        } else {
          createMessage(response.data.message)
        }
        


  }


  return(
    <div className="content">
        <div className="content__title">
          <h1>Страница добавления товара</h1>
        </div>
        <div className="inputs">
        <div className="contentInput">
          <p>Наименование товара</p>
          <input type = 'text' defaultValue={name} onChange = {(event)=> changeVar(name, setName, event)}/>
        </div>
        <div className="contentInput">
          <p>Артикул</p>
          <input type = 'text' defaultValue={article} onChange = {(event)=> changeVar(article, setArticle, event)}/>
        </div>
        <div className="contentInput">
          <p>Цена товара</p>
          <input type = 'text' defaultValue={price} onChange = {(event)=> changeVar(price, setPrice, event)}/>
        </div>
        <div className="contentInput">
          <p>Старая цена</p>
          <input type = 'text' defaultValue={oldprice} onChange = {(event)=> changeVar(oldprice, setOldprice, event)}/>
        </div>
        <div className="contentInput">
          <p>Короткое описание</p>
          <textarea onChange = {(event)=> changeVar(shortdescription, setShortdescription, event)} defaultValue = {shortdescription}></textarea>
        </div>
        <div className="contentInput">
          <p>Описание</p>
          <textarea onChange = {(event)=> changeVar(description, setDescription, event)} defaultValue = {description}></textarea>
        </div>
        <div className="contentInput">
          <p>Характеристики (перечислить через #)</p>
          <textarea onChange = {(event)=> changeVar(characteristics, setCharacteristics, event)} defaultValue = {characteristics}></textarea>
        </div>
        <div className="contentInput">
          <p>Фото</p>
          <input type = 'text' defaultValue={images} onChange = {(event)=> changeVar(images, setImages, event)}/>
        </div>
        <div className="contentInput">
          <p>Категория</p>
          <select onChange={(event)=> changeVar(catid, setCatid, event)}>
              <option disabled >Выберите категорию</option>
              <option value = 'catid_1'>1. карабины блоки ролики стропы</option>
              <option value = 'catid_2'>2. веревки</option>
              <option value = 'catid_3'>3. каски и сидушки</option>
              <option value = 'catid_4'>4. системы и привязи</option>
              <option value = 'catid_5'>5. спусковые устройства</option>
              <option value = 'catid_6'>6. зажимы и страховочные устройства</option>
              <option value = 'catid_7'>7. прочее снаряжение</option>
              <option value = 'catid_8'>8. распродажа снаряжения</option>
          </select>
        </div>
        <div className="message">
          <h3>{message}</h3>
        </div>
        <div className="contentInput">
          <button onClick = {()=> createGood({name, article, price, oldprice, description, shortdescription, characteristics, images, catid})}>Создать товар</button>
        </div>
        </div>

    </div>
  )
}

export default AddGoodPage;
