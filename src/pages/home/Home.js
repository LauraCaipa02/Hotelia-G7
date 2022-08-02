import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchRoom";
import Navbar from "../../components/navbar/Navbar";
function Home(){
    return(
        <main>
            <Navbar />
            <SearchBar />
        </main>
    )
}
export default Home;