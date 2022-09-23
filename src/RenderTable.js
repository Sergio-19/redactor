  
  const RenderTable = ({click, article, name, price, oldprice, description, shortdescription, characteristics, images, catid, number, good, goodArticle}) => {

     return (
          <div className="table-row" >
         <div className="table-cell"><span>{number + 1}</span></div>
          {Object.keys(good).map((el, i)=> {
               return (
                    <div className="table-cell" 
                    key = {i}
                    data-field = {el}
                    onClick = {()=> click(el, good)}>
                         {/* {el === 'description' || el === 'shortdescription' ? <span>{good[el]}</span> : <></>} */}
                    {el === 'images' ? <img src = {good[el]} alt = 'good'/> : <span>{good[el]}</span>}
         </div>
               )
          })}
{/* 
         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'name'
              >   
                 <span>{name}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'price'
              ><span>{price}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'oldprice'
              ><span>{oldprice}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'description'
              ><span>{description}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'shortdescription'
              ><span>{shortdescription}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'characteristics'
              ><span>{characteristics}</span></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'images'
              ><img src = {images}/></div>

         <div className="table-cell" 
              onClick = {(event)=> click(event, goodArticle, good)}
              data-field = 'category'
              ><span>{catid}</span></div> */}

     </div>
     )
  

  }


  export default RenderTable