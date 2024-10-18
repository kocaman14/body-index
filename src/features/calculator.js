import { createSlice } from "@reduxjs/toolkit";

const initialState={
height:0,
weight:0,
bmi:0,


}
const indexSlice=createSlice({
name:"personIndex",
initialState,
reducers:{
    heightCal:(state,action)=>{
state.height=action.payload


},
weightCal:(state,action)=>{
state.weight=action.payload

},
totalCal:(state,action)=>{
if(state.weight>0 && state.height >0){
    const totalHight = state.height / 100;
    state.bmi = state.weight / (totalHight ** 2);
    
}else if(!state.height){

    state.bmi=0
}else{
    state.bmi=0
}
}





}
    


}
)

export const{heightCal,weightCal,totalCal}=indexSlice.actions
export default indexSlice.reducer



