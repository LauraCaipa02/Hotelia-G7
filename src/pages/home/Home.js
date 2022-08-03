import React from "react";
import SearchBar from "../../components/SearchBar/SearchRoom";
import Navbar from "../../components/navbar/Navbar";
import RoomType from "../../components/SearchBar/RoomType";
import FooterDerlHeader from "../../components/Footer/FooterDerlHeader";
function Home(){
    return(
        <main>
            <Navbar />
            <SearchBar />
            <RoomType />
            <FooterDerlHeader />
        </main>
    )
}
export default Home;