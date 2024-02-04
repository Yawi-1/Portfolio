import React from 'react'
import Card from './Card'
import './Css/project.css'
import Data from './Assets/Data'
const Project = () => {
    return (
     <section className='project-container'>
      <h1>Projects</h1>
      <div className='cards-container'>
        {
           Data.map((item)=>{
            return(
             
              <Card name={item.projectname}
                    url = {item.url}
                    description = {item.description}
                    imgSrc={item.imgSrc}
              />
             
            )
           })
        }

      </div>
     </section>
    )
}

export default Project
