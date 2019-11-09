import React, { Component } from 'react';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';

// Queries
import { addProgramMutation, getProgramsQuery } from '../queries/queries';

// Components
import { Form, Button } from 'react-bootstrap';

class AddProgram extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Initial values 
            operation:      '',
            productFamily:  '',
            processId:      '',
            processStep:    null
        };
    }
    clearForm(){
        this.setState({
            operation:      '',
            productFamily:  '',
            processId:      '',
            processStep:    0
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addProgramMutation({
            variables: {
                operation:      this.state.operation,
                productFamily:  this.state.productFamily,
                processId:      this.state.processId,
                processStep:    parseInt(this.state.processStep)
            },
            refetchQueries: [{ query:  getProgramsQuery }]
        }).then(() => {
            this.clearForm();
        }
        ); 
    }
    render(){        
        return (
            
            <Form id="add-program" onSubmit={ this.handleSubmit.bind(this) }>
                <Form.Group controlId="programOperation">
                    <Form.Label>Operation</Form.Label>
                    <Form.Control type="text" value={ this.state.operation } placeholder="Operation" onChange={ (e) => this.setState({ operation: e.target.value })} required/>
                </Form.Group>

                <Form.Group controlId="programOperation">
                    <Form.Label>Product Family</Form.Label>
                    <Form.Control type="text" value={ this.state.productFamily } placeholder="Product Family" onChange={ (e) => this.setState({ productFamily: e.target.value })} required/>
                </Form.Group>

                <Form.Group controlId="programOperation">
                    <Form.Label>Process ID</Form.Label>
                    <Form.Control type="text" value={ this.state.processId } placeholder="Process ID" onChange={ (e) => this.setState({ processId: e.target.value })} required/>
                </Form.Group>

                <Form.Group controlId="programOperation">
                    <Form.Label>Process Step</Form.Label>
                    <Form.Control type="number" value={ this.state.processStep } placeholder="Process Step" onChange={ (e) => this.setState({ processStep: e.target.value })} required/>
                </Form.Group>

                <Button type="submit">Add Program</Button>
            </Form>
        );
    }  
}

export default compose(
    graphql(addProgramMutation,    { name: "addProgramMutation" })
)(AddProgram);