import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div class="content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="page-header">Início</h1>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
