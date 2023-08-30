import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastrar from '../pages/Cadastrar';
import Confirm from '../pages/Confirm';
import Error from '../pages/Error';
import ListaReceitas from '../pages/ListaReceitas';
import RSalgadas from '../pages/RSalgadas';
import ReceitaAberta from '../pages/ReceitaAberta';
import RBebidas from '../pages/RBebidas';
import Login from '../pages/Login';
import RDoces from "../pages/RDoces";


const Root = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastrar' element={<Cadastrar />} />
                <Route path='/Confirm' element={<Confirm />} />
                <Route path='*' element={<Error />} />
                <Route path='/ListaReceitas' element={< ListaReceitas />} />
                <Route path='/Rsalgadas' element={<RSalgadas/>} />
                <Route path='/ReceitaAberta' element={<ReceitaAberta />} />
                <Route path='/RBebidas' element={<RBebidas />} />
                <Route path='/RDoces' element={<RDoces />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </Router >



    );

}

export default Root