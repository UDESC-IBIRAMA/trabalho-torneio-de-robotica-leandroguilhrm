import React, { Component } from 'react';
//import axios from 'axios';

import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
//import './css/Login.css';

class CadastroCliente extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            nome:  '',
            cpf:       '',
            cartaoCredito:    '',
            bairro:      '',
            rua: '',
            numero: '',
            bairroEntrega:      '',
            ruaEntrega: '',
            numeroEntrega: '',
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
                            nome: result.name,
                            cpf: result.height
                        });
                        //console.log(this.state);
                    }
                )
            //console.log(this.state);
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
                                <h3 className={'page-header'}>Cadastro de Clientes</h3>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col col-sm-10'}>
                                <section className={'conteudo'}>
                                    <form onSubmit={this.onSubmit}>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <Input
                                                    name="nome"
                                                    type="text"
                                                    label="Nome Completo"
                                                    value={this.state.nome}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="cpf"
                                                    type="text"
                                                    label="CPF"
                                                    value={this.state.cpf}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="cartaoCredito"
                                                    type="text"
                                                    label="Número do cartão de crédito"
                                                    value={this.state.cartaoCredito}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <h5>Endereço</h5>
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-12'}>
                                                <Input
                                                    name="rua"
                                                    type="text"
                                                    label="Rua"
                                                    value={this.state.rua}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="numero"
                                                    type="number"
                                                    label="Número"
                                                    value={this.state.numero}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-8'}>
                                                <Input
                                                    name="bairro"
                                                    type="text"
                                                    label="Bairro"
                                                    value={this.state.bairro}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <h5>Endereço de Entrega</h5>
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-12'}>
                                                <Input
                                                    name="ruaEntrega"
                                                    type="text"
                                                    label="Rua"
                                                    value={this.state.ruaEntrega}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="numeroEntrega"
                                                    type="number"
                                                    label="Número"
                                                    value={this.state.numeroEntrega}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-8'}>
                                                <Input
                                                    name="bairroEntrega"
                                                    type="text"
                                                    label="Bairro"
                                                    value={this.state.bairroEntrega}
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

export default CadastroCliente;
