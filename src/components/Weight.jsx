import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { totalCal, weightCal } from '../features/calculator'

export const Weight = () => {
    const {weight}=useSelector((state)=>state.index)
    const dispatch =useDispatch()
const handleChangeWeight=(e)=>{
    dispatch(weightCal(e.target.value))
    dispatch(totalCal())

}

  return (
    <div className="container">

    <h3>Weight</h3>
    <input type="range" max="400" min="0" value={weight} onChange={handleChangeWeight}></input>
    <span>Weight:{weight}kg</span>
    
    </div>
    
    
    
  )
}

