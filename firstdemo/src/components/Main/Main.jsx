import React from "react"
import "./main.css"
import { useState,useEffect } from "react"


const Main = () => {

    const [apiData, setApiData] = useState([])
    const ApiUrl = "https://jsonplaceholder.typicode.com/photos"
    useEffect(()=> {
        fetch(ApiUrl).then(res=>res.json())
        .then(res => setApiData(res))
         
    }, [apiData])
    return(
      
       <div className="container">
          <div className="row mt-3">
           {
            apiData ? apiData.slice(0,100).map((item,className)=> (
            <div key={`api_data${className}`} className="col-lg-4 mt-4">
               
              <div className="cards">

                <div className="imgitem">
                    
                    <img style={{width:'100%',height:'100%'}} src="https://i.aydinlik.com.tr/2/1280/720/storage/files/images/2022/02/21/samanyolunun-100-kati-bilinen-en-buyuk-galaksi-kesfedildi-bbq2.jpg.webp" alt="" />
                    
                </div>
                <div className="textitem">
                    <p className="galaksi">Galaksi</p>
                    <p className="galaksitext">Galaksi veya gök ada, kütle çekimi kuvvetiyle birbirine bağlı yıldızlar, yıldızlararası gaz, toz ve plazmanın meydana getirdiği yıldızlararası madde ve şimdilik pek anlaşılamamış karanlık maddede oluşan maddesel bir sistemdir. </p>
                </div>
              </div>

            </div>
         
            )) : <h1>data is not defiend</h1>
         }
          </div>
       
       </div>
    )
}

export default Main

