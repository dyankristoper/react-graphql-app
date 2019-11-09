import { gql } from 'apollo-boost';

// Fetch the list of all programs
const getProgramsQuery = gql`
    {
        programs{
            id,
            operation,
            productFamily,
            processId,
            processStep
        }   
    }
`

// Create a new program
const addProgramMutation = gql`
    mutation($operation: String!, $productFamily: String!, $processId: String!, $processStep: Int! ) {
        createProgram(operation: $operation, productFamily: $productFamily, processId: $processId, processStep: $processStep){
            id,
            operation
        }
    }
`

// Update existing program
const updateProgramMutation = gql`
    mutation($id: Int!, $program: ProgramParams) {
        updateProgram(id: $id, program: $program){
            id
        }
    }
`

// Delete a certain program
const deleteProgramMutation = gql`
    mutation($id: Int) {
        deleteProgram(id: $id){
            id
        }
    }
`

// Fetch a program by id
const getProgramQuery = gql`
    query($id: Int!){
        program(id: $id){
            id,
            operation,
            productFamily,
            processId,
            processStep
        }
    }
`

// Export
export { getProgramsQuery, addProgramMutation, updateProgramMutation, deleteProgramMutation, getProgramQuery };
