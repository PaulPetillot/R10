import React from 'react';
import client from './ApolloClient'
import AppNavigator from './navigation/RootStackNavigator'
import { ApolloProvider } from 'react-apollo';
import { Font } from 'expo';

export default class App extends React.Component {
   componentDidMount() {
    Font.loadAsync({
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
       <AppNavigator/>
      </ApolloProvider>
    );
  }
}

