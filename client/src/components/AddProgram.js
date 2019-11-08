import React, { Component } from 'react';
import { gql }             from 'apollo-boost';
import { graphql }         from 'react-apollo';

class AddProgram extends Component {
    render(){
        return (
            <form id="add-program">
                <div className="field">
                    <label>Operation:</label>
                    <input type="text" required/>
                </div>

                <div className="field">
                    <label>Product Family:</label>
                    <input type="text" required/>
                </div>

                <div className="field">
                    <label>Process ID:</label>
                    <input type="number" required/>
                </div>

                <div className="field">
                    <label>Process Step:</label>
                    <input type="text" required/>
                </div>

                <button>Add Program</button>
            </form>
        );
    }  
}

export default AddProgram;