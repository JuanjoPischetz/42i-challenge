'use client'
import {useState} from 'react'
import styles from './smallform.module.css'
import { nonConstructibleChange, transformToIntegerArray } from "@/services/controllers"


const NonForm = () => {
    const [form, setForm] = useState({
        firstArray:'',
        result:''
      })
    
      const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({
          ...form,
          [name]: value.replace(/[^0-9, ]/g, ''),
        });
      };
    
      const handleClick = (event : React.FormEvent )=>{
        event.preventDefault()
        const arrayOne = transformToIntegerArray(form.firstArray)
        const calculated = nonConstructibleChange(arrayOne)
        setForm({
            firstArray:arrayOne.toString(),
            result:calculated.toString()
        })
      }

      const handleReset = (event : React.FormEvent )=>{
        event.preventDefault()
        setForm({
            firstArray:'',
            result:''
        })
      }
    
      return (
        <form className={styles.formBox} onSubmit={(event)=>handleClick(event)}>
          <div className={styles.inputBox}>
            <label htmlFor="firstArray" className={styles.title}> Change Array</label>
            <input type="text" name="firstArray" value={form.firstArray} className={styles.inputLine} onChange={handleChange}/>
          </div>
          <div className={styles.inputBox} >
            <label htmlFor="result" className={styles.title}>Result</label>
            <input type="text" name="result" defaultValue={form.result} className={styles.inputLine} readOnly/>
          </div>
          <div className={styles.buttonsContainer}>
            <button type="button" id="reset"
            className={`${styles.button} ${styles.resetButton}`}
            onClick={(event)=>handleReset(event)} 
            >Reset</button>
            <button type="submit"
            className={!(/\d/.test(form.firstArray))?styles.button:`${styles.button} ${styles.calculateButton}`} 
            disabled={!(/\d/.test(form.firstArray))} 
            >Calculate</button>
            </div>
        </form>
      )
}

export default NonForm