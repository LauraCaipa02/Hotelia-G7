import axios from "axios";

const TodasHabitaciones= async(state)=>{
    const peticion=await axios.get ('https://hoteliakuepag7.herokuapp.com/habitaciones')
    state(peticion.data)
}

export{TodasHabitaciones}