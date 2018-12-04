import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className={'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'} id="mainNav">
                <a className={'navbar-brand'} href="/">Trabalho Final</a>
                <button className={'navbar-toggler navbar-toggler-right'} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={'navbar-toggler-icon'}></span>
                </button>
                <div className={'collapse navbar-collapse'} id="navbarResponsive">
                    <ul className={'navbar-nav navbar-sidenav'} id="exampleAccordion">
                        <li className={'nav-item'} data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <a className={'nav-link'} href="/">
                                <i className={'fa fa-fw fa-dashboard'}></i>
                                <span className={'nav-link-text'}>Início</span>
                            </a>
                        </li>
                        <li className={'nav-item'} data-toggle="tooltip" data-placement="right" title="Components">
                            <a className={'nav-link nav-link-collapse collapsed'} data-toggle="collapse" href="#abrirCadastros" data-parent="#exampleAccordion">
                                <i className={'fa fa-fw fa-edit'}></i>
                                <span className={'nav-link-text'}>Cadastros</span>
                            </a>
                            <ul className={'sidenav-second-level collapse'} id="abrirCadastros">
                                <li><a href="/equipes">Equipes</a></li>
                                <li><a href="/integrantes">Integrantes</a></li>
                                <li><a href="/juizes">Juízes</a></li>
                                <li><a href="/categorias">Categorias</a></li>
                                <li><a href="/criterios">Critérios/Missões</a></li>
                                <li><a href="/alternativas">Alternativas</a></li>
                                <li><a href="/temporadas">Temporadas</a></li>
                                <li><a href="/competicoes">Competições</a></li>
                                <li><a href="/arenas">Arenas</a></li>
                                <li><a href="/salas-avaliacao">Salas de Avaliação</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={'navbar-nav sidenav-toggler'}>
                        <li className={'nav-item'}>
                            <a className={'nav-link text-center'} id="sidenavToggler">
                                <i className={'fa fa-fw fa-angle-left'}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
