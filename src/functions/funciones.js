import axios from "axios";

const TodasHabitaciones= async(state)=>{
    const peticion=await axios.get ('https://hoteliakuepa.herokuapp.com/habitaciones')
    state(peticion.data)
    console.log(peticion.data)
}

export{TodasHabitaciones}