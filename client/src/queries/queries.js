import { gql } from 'apollo-boost';

const getProgramsQuery = gql`
    {
        programs{
            id,
            operation,
            productFamily
        }   
    }
`

export { getProgramsQuery };
