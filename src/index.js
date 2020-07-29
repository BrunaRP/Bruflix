import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home}/>
    <Route path= "/cadastro/video" component={CadastroVideo}/>
    <Route path= "/cadastro/categoria" component={CadastroCategoria}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


