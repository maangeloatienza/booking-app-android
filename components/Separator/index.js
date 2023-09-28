import React from 'react'
import { 
  StyleSheet,
  View, 
  Text
} from 'react-native'

export const Separator= ({stylesProp,text}) => <View style={stylesProp}>
  <Text style={styles.textPos}>{text}</Text>
</View>


const styles = StyleSheet.create({
  container : {
    position: 'relative'
  },
  textPos: {
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#26292B',
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: -8
  }
})