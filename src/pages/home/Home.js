import React from "react";
import SearchBar from "../../components/SearchBar/SearchRoom";
import Navbar from "../../components/navbar/Navbar";
import RoomType from "../../components/SearchBar/RoomType";
function Home(){
    return(
        <main>
            <Navbar />
            <SearchBar />
            <RoomType />
        </main>
    )
}
export default Home;