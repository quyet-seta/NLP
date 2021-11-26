/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Creating a new application: npx react-native init AwesomeProject
 * Step 1: Start Metro: npx react-native start
 * Step 2: Start your application: npx react-native run-android
 * @format
 * @flow strict-local
 * Alt + Shift + F re-architecture
 * Ctrl + Shift + F to search
 */

/* Comment */

import React, {useState}  from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


const App = () => {
  /*
  const [name, setName] = useState('Harry Potter');
  const [session, setSession] = useState({number:6, title:'state'})
  const [number, setNumber] = useState(0)

  const onClickHandler = () => {
    setName('Programming with Harry Potter');
    setSession({number:7, title:'style'});
    setNumber(number+5);
  }

  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.titles}</Text>
      <Text style={styles.text}>{number}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
    </View>
  );
  */
  return (
    <View style={styles.con}>
      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={flattenStyle}>Android</Text>
        <Text style={styles.row}>iOS</Text>
        <Text style={styles.row}>Linux</Text>
      </View>

      <View style={styles.mainview}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  /*
  body: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: 'center', // theo axis
    justifyContent: 'center', // theo view
  },
  */
  text: {
    color: '#765fff',
    fontSize: 30,
    fontStyle: 'italic',
  },
  
  con: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  
  container: {
    width: '100%',
    height: '50%',
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },

  title: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 10,
    backgroundColor: '#61dafb'
  },

  row: {
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth
  },


  /*------------------------------------------------*/
  mainview: {
    flex:1,
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    backgroundColor: '#99abcd',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },

  view1: {
    flex: 2,
    //width: 100,
   // height: 100,
    backgroundColor: '#00f234',
    justifyContent: 'center',
    alignItems: 'center'
  },

  view2: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#0102ff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  view3: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#f01234',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

const page = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);

export default App;
