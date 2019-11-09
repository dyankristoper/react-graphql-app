import React, { Component } from 'react';
import { graphql }          from 'react-apollo';

import { compose }          from 'recompose';

// Queries
import { getProgramsQuery, deleteProgramMutation } from '../queries/queries';

// Components
import ProgramDetails       from './ProgramDetails';

class ProgramList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Initial values 
            selected: null
        };
    }
    deleteProgram(id){
        this.props.deleteProgramMutation({
            variables: {
                id:  id
            },
            refetchQueries: [{ query:  getProgramsQuery }]
        });
    }
    displayPrograms(){
        var data = this.props.getProgramsQuery;
        if(data.loading){
            return(<tr><td col="2">Fetching program list...</td></tr>)
        }else{
            // Check if there exist programs in the database
            if( data.programs ){
                return data.programs.map(program => {
                    return (
                        <tr>
                           <td key={ program.id } onClick={ (e) => { this.setState({ selected: program })}}>{ program.operation }</td> 
                           <td className="red" onClick={ (e) => { this.deleteProgram(program.id) } } >Delete</td>
                        </tr>
                    )
                });
            }else{
                return (
                    <tr>
                        <td colspan="2">No programs available</td>
                    </tr>
                )
            }
        }
    }
    render(){
        return (
            <div>
                <table id="program-list" className="table">
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.displayPrograms() }
                    </tbody>
                </table>
                <ProgramDetails program={ this.state.selected } />
            </div>
        );
    }  
}

export default compose( 
    graphql(getProgramsQuery,      { name: "getProgramsQuery"}),
    graphql(deleteProgramMutation, { name: "deleteProgramMutation" })
)(ProgramList);
