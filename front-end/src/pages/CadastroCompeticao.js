import React, { Component } from 'react';
//import axios from 'axios';

import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
//import './css/Login.css';

class CadastroCompeticao extends Component {
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

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        if (this.props.match.params['id'] > 0){
            fetch("https://swapi.co/api/people/" + this.props.match.params['id'])
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            id: result.mass,
                            cidade: result.skin_color,
                            estado: result.gender,
                            data: result.edited,
                            responsavel: result.hair_colos,
                            tipo: result.height,
                            temporada: result.eye_color,
                        });
                    }
                )
        }
    }

    onSubmit(e){
        e.preventDefault();

        /*axios.get('http://192.168.11.4:8080/ProvaWebBack/model.funcionario?id=5');
        axios.post('http://192.168.11.4:8080/ProvaWebBack/model.funcionario', {
            descricao:  this.state.descricao,
            foto:       this.state.foto,
            tamanho:    this.state.tamanho,
            preco:      this.state.preco,
            quantidade: this.state.quantidade
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });*/
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
                            <div className={'col'}>
                                <h3 className={'page-header'}>Cadastro de Competições</h3>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col col-sm-10'}>
                                <section className={'conteudo'}>
                                    <form onSubmit={this.onSubmit}>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <Input
                                                    name="cidade"
                                                    type="text"
                                                    label="Cidade"
                                                    value={this.state.cidade}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="estado"
                                                    type="text"
                                                    label="UF"
                                                    value={this.state.estado}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="data"
                                                    type="text"
                                                    label="Data"
                                                    value={this.state.data}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="responsavel"
                                                    type="text"
                                                    label="Tipo"
                                                    value={this.state.tipo}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="temporada"
                                                    type="text"
                                                    label="Temporada"
                                                    value={this.state.temporada}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <Button type="submit" texto="Salvar" />
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default CadastroCompeticao;
