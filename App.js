import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Counter from './components/Counter'
import Selectors from './components/Selectors'
import styles from './components/styles'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work: {
        minutes: 25,
        secondes: 0,
        message: "Time to work"
      },
      chill: {
        minutes : 5,
        secondes: 0,
        message: "Time to chill"
      }
    }
  }

  workFormSelector = (min, sec) => {
    this.setState({
      work: {
        minutes: Number(min),
        secondes: Number(sec),
        message: "Time to work"
      } 
    })
  }

  chillFormSelector = (min, sec) => {
    this.setState({
      chill: {
        minutes: Number(min),
        secondes: Number(sec),
        message: "Time to chill"
      } 
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Counter timingWork={this.state.work} timingChill={this.state.chill} />
          <Selectors status="work" time={this.state.work} callback={this.workFormSelector} />
          <Selectors status="chill" time={this.state.chill} callback={this.chillFormSelector} />
      </KeyboardAvoidingView> 
    )
  }
}




