import React, { Component } from 'react';
import $ from 'jquery';

$.DataTable = require('datatables.net');

class Datatable extends Component {
    componentDidMount(){
    }

    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-table"></i> {this.props.nome}</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" ref={el => this.el = el}>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Datatable;
