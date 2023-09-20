'use client'
import { useState } from "react"
import styles from './smallform.module.css'
import { smallestDifference, transformToIntegerArray } from "@/services/controllers"

const SmallForm = () => {

  const [form, setForm] = useState({
    firstArray:'',
    secondArray:'',
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
    const arrayTwo = transformToIntegerArray(form.secondArray)
    const calculated = smallestDifference(arrayOne, arrayTwo)
    setForm({
      firstArray:arrayOne.toString(),
      secondArray:arrayTwo.toString(),
      result:calculated.toString()
    })
  }
  const handleReset = (event : React.FormEvent )=>{
    event.preventDefault()
    setForm({
        firstArray:'',
        secondArray:'',
        result:''
    })
  }

  return (
    <form className={styles.formBox} onSubmit={(event)=>handleClick(event)}>
      <div className={styles.inputBox}>
        <label htmlFor="firstArray" className={styles.title} > First Array</label>
        <input type="text" className={styles.inputLine} name="firstArray" value={form.firstArray} onChange={handleChange}/>
      </div>
      <div className={styles.inputBox} >
        <label htmlFor="secondArray"className={styles.title} >Second Array</label>
        <input type="text" className={styles.inputLine} name="secondArray" value={form.secondArray} onChange={handleChange} />
      </div>
      <div className={styles.inputBox} >
        <label htmlFor="result"className={styles.title} >Result</label>
        <input type="text" className={styles.inputLine} name="result" defaultValue={form.result} readOnly/>
      </div>
      <div className={styles.buttonsContainer}>
      <button type="button" id="reset"
      className={`${styles.button} ${styles.resetButton}`}
      onClick={(event)=>handleReset(event)} 
      >Reset</button>
      <button type="submit"
      className={!(/\d/.test(form.firstArray) && /\d/.test(form.secondArray))?styles.button:`${styles.button} ${styles.calculateButton}`} 
      disabled={!(/\d/.test(form.firstArray) && /\d/.test(form.secondArray))} 
      >Calculate</button>
      </div>
    </form>
  )
}

export default SmallForm