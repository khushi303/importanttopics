import React from 'react';
import Header from '../components/Header';
import ModalSec from '../components/ModalSec';
import { Route, Routes } from 'react-router-dom';
import FormPage from '../components/FormPage';
import AccSec from '../components/AccSec';
import Navbar from '../components/Navbar';
// import SlickSlider from '../components/SlickSlider';
import ReducerCounter from '../components/ReducerCounter';
import SliderSec from './SliderSec'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Header />}></Route>
                <Route path='/Modal' exact element={<ModalSec />}></Route>
                <Route path='/FormPage' exact element={<FormPage />}></Route>
                <Route path='/AccSec' exact element={<AccSec />}></Route>
                <Route path='/SliderSec' exact element={<SliderSec />}></Route>
                <Route path='/ReducerCounter' exact element={<ReducerCounter />}></Route>
            </Routes>
        </div>
    )
}

export default Homepage