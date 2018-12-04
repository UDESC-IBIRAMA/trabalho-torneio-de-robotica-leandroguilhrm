import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Datatable from '../components/Datatable';
import $ from "jquery";

class ConsultaCompeticao extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:   '',
            cidade: '',
            estado:  '',
            data:  '',
            responsavel:  '',
            tipo:  '',
            temporada:  '',
        }

        this.onChange = this.onChange.bind(this);
    }



    componentDidMount(){
        this.el = $(this.el);
        this.el.DataTable({
            ajax: {
                url: 'https://swapi.co/api/people/',
                dataSrc: 'results'
            },
            columns: [
                {title: "ID", data: 'mass'},
                {title: "Cidade", data: "skin_color"},
                {title: "UF", data: "gender"},
                {title: "Data", data: "edit"},
                {
                    "defaultContent": "<button class=\"btn btn-dark btn-editar btn-sm\">Editar</button> <button class=\"btn btn-danger btn-excluir btn-sm\">Excluir</button>"
                }
            ]
        });

        this.el.on( 'click', '.btn-editar', function () {
            $(document.location).attr('href', '/competicoes/cadastro/' + $(this).parent().parent().children().first().text());
        } );
    }

    onChange(e){
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div>
                <NavBar />

                <div className={'content-wrapper'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div className={'col-sm-12'}>
                                <div className={'card'}>
                                    <div className={'card-header'}>
                                        <i className={'fa fa-table'}></i> Competições</div>
                                    <div className={'card-body'}>
                                        <div className={'table-responsive'}>
                                            <table className={'table table-bordered'} id="dataTable" width="100%" cellSpacing={'0'} ref={el => this.el = el}>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default ConsultaCompeticao;
