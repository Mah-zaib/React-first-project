import React from 'react'
// import logo from '../../assets/logo.png'
import data from '../../data/db.json'
import Searchbar from '../../components/Searchbar'
import styles from './Tools.module.css'
import { Link } from 'react-router-dom'
import Comingsoon from '../../components/Comingsoon'
import Imagegenerator from '../../components/Imagegenerator'

// import Writingtools from '../../components/Writingtools'

export default function Tools() {

 console.log(data.img)

  return (
    <div>
      <Searchbar/>
      <div className={styles['main']}>
       <div className={styles['cardslist']}>
       {data.map(tool=>(
       <div key={tool.id} className={styles['card']}> 
       <h3>{tool.name}</h3>
       {/* <img src={tool.img} alt="ghg" /> */}
       <p>{tool.subtitle}</p>
       <button className='btn'>
       <Link to={`/tools/${tool.route}`}>{tool.status }
       </Link></button>
       </div>    
       ))}
       {/* <Writingtools tools={data}/> */}
       </div>
       </div>
    </div>
    
  )
}
