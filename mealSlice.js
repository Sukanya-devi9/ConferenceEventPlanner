import { createSlice } from "@reduxjs/toolkit";

const mealSlice =createSlice({
 name:'meals',
 initialState:[
   {
      name:'Breakfast',
      cost:50,
      selected:false,
      type: 'mealForPeople',
   },
   {
      name:'High Tea',
      cost:25,
      selected:false,
      type: 'mealForPeople',
   },
   {
      name:'Lunch',
      cost:60,
      selected:false,
      type: 'mealForPeople',
   },
   {
      name:'Dinner',
      cost:70,
      selected:false,
      type: 'mealForPeople',
   },

 ],
 reducers:{
    toggleMealSelection:(state,action)=>{
       state[action.payload].selected=!state[action.payload].selected
    },
 },
});
export const {toggleMealSelection}=mealSlice.actions;
export default mealSlice.reducer;

