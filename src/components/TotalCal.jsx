import React from 'react'
import { useSelector } from 'react-redux'
import { heightCal, totalCal, weightCal } from '../features/calculator'


const TotalCal = () => {
const{bmi,height,weight}=useSelector((state)=>state.index)


console.log(bmi)
  return (
    <div className="container">
        
    <h3>Body Indexs</h3>
    
    <h4>
        {height === 0 && weight === 0
          ? `Please enter height and weight.`
          : `BMI: ${bmi.toFixed(1)}`}
      </h4>
          </div>
    
  )
}

export default TotalCal