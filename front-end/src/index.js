import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './pages/App';

import ConsultaEquipe from './pages/ConsultaEquipe';
import CadastroEquipe from './pages/CadastroEquipe';

import ConsultaIntegrante from './pages/ConsultaIntegrante';
import CadastroIntegrante from './pages/CadastroIntegrante';

import ConsultaJuiz from './pages/ConsultaJuiz';
import CadastroJuiz from './pages/CadastroJuiz';

import ConsultaCategoria from './pages/ConsultaCategoria';
import CadastroCategoria from './pages/CadastroCategoria';

import ConsultaCriterio from './pages/ConsultaCriterio';
import CadastroCriterio from './pages/CadastroCriterio';

import ConsultaAlternativa from './pages/ConsultaAlternativa';
import CadastroAlternativa from './pages/CadastroAlternativa';

import ConsultaTemporada from './pages/ConsultaTemporada';
import CadastroTemporada from './pages/CadastroTemporada';

import ConsultaCompeticao from './pages/ConsultaCompeticao';
import CadastroCompeticao from './pages/CadastroCompeticao';

import ConsultaArena from './pages/ConsultaArena';
import CadastroArena from './pages/CadastroArena';

import ConsultaSalaAvaliacao from './pages/ConsultaSalaAvaliacao';
import CadastroSalaAvaliacao from './pages/CadastroSalaAvaliacao';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App} exact />

            <Route path="/equipes" component={ConsultaEquipe} exact />
            <Route path="/equipes/cadastro" component={CadastroEquipe} exact />
            <Route path="/equipes/cadastro/:id" component={CadastroEquipe} />

            <Route path="/integrantes" component={ConsultaIntegrante} exact />
            <Route path="/integrantes/cadastro" component={CadastroIntegrante} exact />
            <Route path="/integrantes/cadastro/:id" component={CadastroIntegrante} />

            <Route path="/juizes" component={ConsultaJuiz} exact />
            <Route path="/juizes/cadastro" component={CadastroJuiz} exact />
            <Route path="/juizes/cadastro/:id" component={CadastroJuiz} />

            <Route path="/categorias" component={ConsultaCategoria} exact />
            <Route path="/categorias/cadastro" component={CadastroCategoria} exact />
            <Route path="/categorias/cadastro/:id" component={CadastroCategoria} />

            <Route path="/criterios" component={ConsultaCriterio} exact />
            <Route path="/criterios/cadastro" component={CadastroCriterio} exact />
            <Route path="/criterios/cadastro/:id" component={CadastroCriterio} />

            <Route path="/alternativas" component={ConsultaAlternativa} exact />
            <Route path="/alternativas/cadastro" component={CadastroAlternativa} exact />
            <Route path="/alternativas/cadastro/:id" component={CadastroAlternativa} />

            <Route path="/temporadas" component={ConsultaTemporada} exact />
            <Route path="/temporadas/cadastro" component={CadastroTemporada} exact />
            <Route path="/temporadas/cadastro/:id" component={CadastroTemporada} />

            <Route path="/competicoes" component={ConsultaCompeticao} exact />
            <Route path="/competicoes/cadastro" component={CadastroCompeticao} exact />
            <Route path="/competicoes/cadastro/:id" component={CadastroCompeticao} />

            <Route path="/arenas" component={ConsultaArena} exact />
            <Route path="/arenas/cadastro" component={CadastroArena} exact />
            <Route path="/arenas/cadastro/:id" component={CadastroArena} />

            <Route path="/salas-avaliacao" component={ConsultaSalaAvaliacao} exact />
            <Route path="/salas-avaliacao/cadastro" component={CadastroSalaAvaliacao} exact />
            <Route path="/salas-avaliacao/cadastro/:id" component={CadastroSalaAvaliacao} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));
