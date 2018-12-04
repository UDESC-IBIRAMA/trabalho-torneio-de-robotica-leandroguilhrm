import React, { Component } from 'react';
//import axios from 'axios';

import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
//import './css/Login.css';

class CadastroAlternativa extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            valor:  '',
            criterio: ''
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
                            valor: result.name,
                            criterio: result.height
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
                                <h3 className={'page-header'}>Cadastro de Alternativas</h3>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col col-sm-10'}>
                                <section className={'conteudo'}>
                                    <form onSubmit={this.onSubmit}>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <Input
                                                    name="valor"
                                                    type="text"
                                                    label="Valor"
                                                    value={this.state.valor}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <Input
                                                    name="criterio"
                                                    type="text"
                                                    label="Critério"
                                                    value={this.state.criterio}
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

export default CadastroAlternativa;
