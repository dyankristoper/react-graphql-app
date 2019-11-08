import React, { Component } from 'react';
import { gql }             from 'apollo-boost';
import { graphql }         from 'react-apollo';

// Queries
import { getProgramsQuery } from '../queries/queries';


class ProgramList extends Component {
    displayPrograms(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Fetching program list...</div>)
        }else{
            return data.programs.map(program => {
                return (
                    <li key={ program.id } >{ program.operation }</li>
                )
            });
        }
    }
    render(){
        return (
            <div>
                <ul id="program-list">
                    { this.displayPrograms() }
                </ul>
            </div>
        );
    }  
}

export default graphql(getProgramsQuery)(ProgramList);
