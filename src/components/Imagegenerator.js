import React from 'react'
import data from '../data/db.json'
import styles from './Imagegenerator.module.css'
export default function Imagegenerator({value}) {
   console.log(value)
  // console.log(data)
  return (
    <div> 
     
  
    <div className={styles['main']}>    
      <div className={styles['form']}>
        <div className={styles['title']}>
           <h2>AI Image Generator </h2> 
           <button className='btn'>More AI Tools</button>
         </div>
          {value.textInputs.map(val=>(
           <div>
            {/* {(val.type==="textarea")?<textarea></textarea>:null} */}
            {(val.type==="textarea") &&  <label htmlFor='textarea'><h3>Privide a short image description*</h3><br/><textarea>{val.placeholder}</textarea></label>}
            {(val.type==="option") &&  <label htmlFor='textarea'><h3>{val.name}</h3><br/><select><option>{val.placeholder}</option></select></label>}
            {(val.type==="number") &&  <label htmlFor='textarea'><h3>{val.name}</h3><br/><select><option>{val.placeholder}</option></select></label>}
            {/* {(val.type==="option")?<input type="option" placeholder="Hello there!"></input>:null}
            {(val.type==="number")?<input type="number" placeholder="Hello there!"></input>:null} */}
            </div>     
           ))}
           <div className={styles['buttons']}>
            <button className='btn'>Create</button>
            <button className='btn'>Clear input </button>
           </div>
      </div>
      <div className={styles['image']}>

      </div>
      </div>
    </div>
  )}