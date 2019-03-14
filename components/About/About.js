import React, {Component} from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import styles from './styles'

export default class About extends Component{
  render() {
    return (
      <ScrollView>
      <View style={styles.chelou}>
        <View style={styles.border}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/r10_logo.png')} />
          </View>
        </View>
          <View>
            <Text style={styles.text}>
              R10 is a conference that focus on just about any topic related to dev.
            </Text>
            <Text style={styles.title}>
              Date & Venue 
            </Text>
            <Text style={styles.text}>
              The R10 conference will take place on Tuesday, June 27, 2019 in Vancouver, BC.
            </Text>
            <Text style={styles.title}>
             Code of Conduct
            </Text>
           
            {this.props.conductCode.map((e , index)=>
            <View key={index}>
              <Text style={styles.title}>{e.title}</Text>
              <Text style={styles.text}>{e.description}</Text>
            </View>
            
            )}
            
          </View>
      </View>
        </ScrollView>
    );
  }
}
