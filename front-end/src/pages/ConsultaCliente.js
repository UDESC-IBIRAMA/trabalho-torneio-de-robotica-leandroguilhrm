import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Datatable from '../components/Datatable';
import $ from "jquery";

class ConsultaCliente extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:   '',
            nome: '',
            cpf:  ''
        }

        this.onChange = this.onChange.bind(this);
    }



    componentDidMount(){
        this.el = $(this.el);
        this.el.DataTable({
            ajax: {
                //url: 'https://swapi.co/api/people/',
                url: 'http://192.168.11.6:8080/drones/resource/drone/teste',
                //headers: [
                //    {'Access-Control-Allow-Origin': '*'},
                //    {'Access-Control-Allow-Methods': 'GET, POST, PUT'}
                //],
                //type: 'GET'
                dataSrc: 'results'
                //'beforeSend': function (request) {
                    //request.setRequestHeader("Access-Control-Allow-Origin", '*');
                    //request.setRequestHeader("Access-Control-Allow-Methods", 'GET, POST, PUT');
                //},
                //crossDomain: true
            },
            columns: [
                {title: "ID", data: 'id'},
                {title: "Nome", data: "identificador"},
                {title: "CPF", data: "capacidade"},
                {
                    "defaultContent": "<button class=\"btn btn-dark btn-editar\">Editar</button> <button class=\"btn btn-danger btn-excluir\">Excluir</button>"
                }
            ]
        });

        this.el.on( 'click', '.btn-editar', function () {
            $(document.location).attr('href', '/admin/clientes/cadastro/' + $(this).parent().parent().children().first().text());
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
                                        <i className={'fa fa-table'}></i> Clientes</div>
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

export default ConsultaCliente;
