import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { heightCal, totalCal } from '../features/calculator'
import './styles.css';
export const Height = () => {
const dispatch=useDispatch()
const{height}=useSelector((state)=>state.index)
const handleChangeHeıght=(e)=>{
dispatch(heightCal(e.target.value))
dispatch(totalCal())


}
  return (
   
    <div className="container">

    <h3>Height</h3>
    <input type="range" value={height} min="0" max="250" onChange={handleChangeHeıght}></input>
    <span>Height:{height}cm</span>
    
    </div>
    

  )
}
