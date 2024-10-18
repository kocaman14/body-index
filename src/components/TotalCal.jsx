import React from 'react'
import { useSelector } from 'react-redux'
import { heightCal, totalCal, weightCal } from '../features/calculator'


const TotalCal = () => {
const{bmi,height,weight}=useSelector((state)=>state.index)

 let statüsColor= bmi > 0 && bmi < 18.5 ? { status: "Low weight", color: "blue" } :
  bmi >= 18.5 && bmi < 24.9 ? { status: "Normal weight", color: "green" } :
  bmi >= 25 && bmi < 29.9 ? { status: "Excess weight", color: "pink" } :
  bmi >= 30 && bmi < 34.9 ? { status: "1st Degree Obese", color: "orange" } :
  bmi >= 35 && bmi < 39.9 ? { status: "2nd Degree Obese", color: "dark red" } :
  bmi >= 40 ? { status: "Go to an emergency medical facility", color: "red" } :
  { status: null, color: null };

console.log(bmi)
  return (
    <div className="container">
        
    <h3>Body Indexs</h3>
    
    <h4>
        {height === 0 && weight === 0
          ? `Please enter height and weight.`
          : `BMI: ${bmi.toFixed(5)}`}
      </h4>
          <span style={{color:statüsColor.color}}>
            İnfo:{statüsColor.status}
      
            </span>        
          </div>
    
  )
}

export default TotalCal
