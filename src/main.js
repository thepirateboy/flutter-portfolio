import React from 'react';
import './index.css';


import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron'
import Recent from './Components/Recent'
import More from './Components/More'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



function MainMenu(){
    return (
        <>
            {Navbar()}
            {Jumbotron()}
            {Recent()}
            {More()}
            {Contact()}
            {/* {Footer()} */}
        </>
    )
  }

export default MainMenu;