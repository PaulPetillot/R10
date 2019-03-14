import React, {Component} from 'react';
import { ActivityIndicator } from 'react-native';
import About from './About'
import gql from 'graphql-tag'
import { Query } from "react-apollo";

const GET_CONDUCT = gql`
  {
    allConducts {
        title
        description
    }
  }
`;

export default class AboutContainer extends Component{

  render() {
  return(
        <Query query={GET_CONDUCT}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator/>;
            if (error) return `Error!: ${error}`;
            return (
              <About conductCode={data.allConducts}/>
            );
          }}
        </Query>
  )
  }
}
