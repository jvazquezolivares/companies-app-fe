import React, { Component } from 'react';
import Company from './company';

const companies_data = [
    {
        account_id: 1, 
        name: "company1", 
        city: "Monterrey", 
        companies: [
            {
                account_id: 3, 
                name: "company3",
                city: "Monterrey",
                companies: []
            },
            {
                account_id: 4,
                name: "company4",
                city: "Monterrey",
                companies: [
                  {
                    account_id: 7,
                    name: "company7",
                    city: "Monterrey",
                    companies: []
                  }
                ]
            }
        ]
    }, 
    {
        account_id: 5, 
        name: "company5", 
        city: "Monterrey", 
        companies: []
    }
];

export default class Companies extends Component {

  state = {
    nodes: companies_data,
  }; 

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