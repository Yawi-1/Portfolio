import React from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'

const Card = ({description,url,name,imgSrc}) => {
    return (
        <div className='card'>
          <img src={imgSrc}/>
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={url} target ="_black"><BsBoxArrowUpRight/></a>
        
        </div>
    )
}

export default Card



