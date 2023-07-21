import React from 'react'
import './Home.css';
import Banner from './Banner'
import Header from './Header';
import Categories from './Categories';
import Card from './Card';
import { Footer } from './Footer';

let  p1 = require("../assets/room1.jpg");
let  p2 = require("../assets/room2.jpg");
let  p3 = require("../assets/room3.jpg");

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Banner/>
        <div className='home-categories'>
            <div style={{display: 'flex', alignItems: "flex-end", justifyContent:"center", flexDirection:"column", marginTop: "180px", marginBottom: "90px", height:"15vh"}}>
                <div style={{background: "#5727A3", height: "170px", width: "50%", zIndex:'-1', position:'absolute'}}>
                </div>
                <div
                style={{display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent: 'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
                    <h1 style={{color:'#1B0044', marginBottom: 'opx',}}className='quote_h1'>
                        Full service at your disposal
                    </h1>
                    <h4
                    style={{display:'flex', alignItems:'center',justifyContent:'center', color: 'gray', marginTop:"0px"}}
                    className='quote_h4'>More than you can imagine.</h4>
                </div>
            </div>
        </div>
        <Categories/>
            <div style={{display: '', alignItems: "center", justifyContent:"center", flexDirection:"column", marginTop: "60px", marginBottom: "120px", height:"15vh"}}>
                <div style={{background: "#5727A3", height: "170px", width: "50%", zIndex:'-1', position:'absolute'}}>
                </div>
                <div
                style={{display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent: 'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
                    <h1 style={{color:'#1B0044', marginBottom: 'opx',}}className='quote_h1'>
                        Choose what's best for you
                    </h1>
                    <h4
                    style={{display:'flex', alignItems:'center',justifyContent:'center', color: 'gray', marginTop:"0px"}}
                    className='quote_h4'>Make your vacation comfortable</h4>
                </div>
            </div>

            <div className='home_section'>
                <Card src={p1} title='Hotel 1 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home."/>
                <Card src={p2} title='Hotel 2 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home."/>
                <Card src={p3} title='Hotel 3 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home."/>
            </div>
            <div>
                <h1 className='quotes_card_'>
                    We serve the best Hotels at the best price possible.
                </h1>
            </div>
            <div style={{display: 'flex', alignItems: "flex-end", justifyContent:"center", flexDirection:"column", marginTop: "60px", marginBottom: "120px", height:"15vh"}}>
                <div style={{background: "#5727A3", height: "170px", width: "50%", zIndex:'-1', position:'absolute'}}>
                </div>
                <div
                style={{display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent: 'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
                    <h1 style={{color:'#1B0044', marginBottom: 'opx',}}className='quote_h1'>
                        Luxury Redifined
                    </h1>
                    <h4
                    style={{display:'flex', alignItems:'center',justifyContent:'center', color: 'gray', marginTop:"0px"}}
                    className='quote_h4'>Luxury is Personal
                    </h4>
                </div>
            </div>
            <div className='some_quotes'>
                <h4>Made with love</h4>
            </div>
            <Footer/>
    </div>
  )
}

export default Home