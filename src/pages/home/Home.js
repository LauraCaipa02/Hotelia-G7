import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchRoom";
function Home(){
    return(
        <main>
            <SearchBar />
            <Link to="/login">Inicia sesión</Link>

        </main>
    )
}
export default Home;