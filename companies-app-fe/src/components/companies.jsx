import React, { Component } from 'react';
import Company from './company';
import { COMPANIES_API } from '../services/EndpointApi.js';
import axios from 'axios';

export default class Companies extends Component {

  state = {
    nodes: []
  };

  componentDidMount(){
     this.getCompanies()
  }

  getCompanies = ()=> {
    axios.get(COMPANIES_API, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.data) {
          this.setState({
            nodes: response.data.companies
          })
        }
      });
  }

  render() {
    return (
      <div>
        { this.state.nodes.map(node => (
          
          <Company 
            key={ node.account_id }
            node={ node }
            onToggle = { this.onToggle }
          />
        ))}
      </div>
    )
  }
}