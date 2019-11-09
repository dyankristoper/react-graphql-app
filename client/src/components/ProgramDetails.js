import React        from 'react';
import { graphql }  from 'react-apollo';

// Queries
import { getProgramsQuery, getProgramQuery, updateProgramMutation } from '../queries/queries';
import { compose } from 'recompose';

// Components
import { Form, Button } from 'react-bootstrap';

class ProgramDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            operation:      '',
            productFamily:  '',
            processId:      '',
            processStep:    null,
            done:           this.props.done ? this.props.done : false
        };
        console.error(this.state);
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
        console.error(this.props);
        this.props.updateProgramMutation({
            variables: {
                id:             this.props.program.id,
                program:        {
                    operation:      this.state.operation ?  this.state.operation : this.props.getProgramQuery.program.operation,
                    productFamily:  this.state.productFamily ? this.state.productFamily : this.props.getProgramQuery.program.productFamily,
                    processStep:    parseInt(this.state.processStep) ? parseInt(this.state.processStep) : parseInt(this.props.getProgramQuery.program.processStep),
                    processId:      this.state.processId ? this.state.processId : this.props.getProgramQuery.program.processId
                }
            },
            refetchQueries: [{ query:  getProgramsQuery }]
        }).then(()=>{
            this.clearForm();
        }); 
    }
    displayProgramDetails(){
        var program = this.props.getProgramQuery.program;
        if(program){
            return(
                <Form onSubmit={ this.handleSubmit.bind(this) }>
                    <Form.Group controlId="condition">
                        <Form.Label>Operation</Form.Label>
                        <Form.Control type="text" value={ this.state.operation ? this.state.operation : program.operation } placeholder="Operation" onChange={ (e) => this.setState({ operation: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="productFamily">
                        <Form.Label>Product Family</Form.Label>
                        <Form.Control type="text" value={ this.state.productFamily ? this.state.productFamily : program.productFamily } placeholder="Product Family" onChange={ (e) => this.setState({ productFamily: e.target.value })} required/>
                    </Form.Group>

                    <Form.Group controlId="processId">
                        <Form.Label>Process ID</Form.Label>
                        <Form.Control type="text" value={ this.state.processId ? this.state.processId : program.processId} placeholder="Process ID" onChange={ (e) => this.setState({ processId: e.target.value })} required/>
                    </Form.Group>

                    <Form.Group controlId="processStep">
                        <Form.Label>Process Step</Form.Label>
                        <Form.Control type="number" value={ this.state.processStep ? this.state.processStep : program.processStep } placeholder="Process Step" onChange={ (e) => this.setState({ processStep: e.target.value })} required/>
                    </Form.Group>

                    <Button type="submit">Update</Button>
                </Form>
            )
        }else{
            return(
                <div>
                    <span>No program selected ...</span>
                </div>
            )
        }
    }
    render(){
        return (
            <div id="program-details">
                { this.displayProgramDetails() }
            </div>
        );
    }  
}

export default compose(
    graphql(getProgramQuery, {
        options: (props =>{
            if(props.program){
                return {
                    variables: {
                        id:   props.program.id
                    }
                }
            }
        }), 
        name: "getProgramQuery"
    }),
    graphql(updateProgramMutation, { name: "updateProgramMutation" })
)(ProgramDetails);