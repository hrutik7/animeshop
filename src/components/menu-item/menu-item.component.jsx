import React from "react";

import './menu-item.styles.scss'
console.log("im in menu")
const MenuItem = ({title,imageUrl,size}) =>{
    console.log(title)
    console.log("im belo title")
    return(
        <div className={`${size} menu-item` } style={{
            backgroundImage : `url(${imageUrl})`
            
        }}>

            <div className="background-image" style={{
                backgroundImage : `url(${imageUrl})`
            }} />
       
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                
            </div>
      
    </div>
    )
}


export default MenuItem