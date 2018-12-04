import React, { Component } from 'react';
//import axios from 'axios';

import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';

class CadastroIntegrante extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            nome:  '',
            cpf:       '',
            rg:    '',
            data_nascimento:      '',
            nome_pai: '',
            nome_mae: '',
            aut_entregue:      '',
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
                            cpf: result.height,
                            rg: result.height,
                            data_nascimento: result.edited,
                            nome_pai: result.skin_color,
                            nome_mae: result.eye_color,
                            aut_entregue: result.gender,
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
                                <h3 className={'page-header'}>Cadastro de Integrantes das Equipes</h3>
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
                                                    label="Nome"
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
                                                    name="rg"
                                                    type="text"
                                                    label="RG"
                                                    value={this.state.rg}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="data_nascimento"
                                                    type="text"
                                                    label="Data Nascimento"
                                                    value={this.state.data_nascimento}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col'}>
                                                <h5>Outras Informações</h5>
                                            </div>
                                        </div>
                                        <div className={'row'}>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="nome_pai"
                                                    type="text"
                                                    label="Nome do Pai"
                                                    value={this.state.nome_pai}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="nome_mae"
                                                    type="text"
                                                    label="Nome da Mãe"
                                                    value={this.state.nome_mae}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className={'col-sm-4'}>
                                                <Input
                                                    name="aut_entregue"
                                                    type="text"
                                                    label="Autorização Entregue"
                                                    value={this.state.aut_entregue}
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

export default CadastroIntegrante;
