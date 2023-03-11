import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [count, setCount] = useState(10)
  function onPressFunction(){
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>Android App</Text>
      <StatusBar style="auto" />
      <Text>State:{count}</Text>
     <View style={styles.shit}>
     <Pressable onPress={e=>setCount(count+1)}>
      <Text style={styles.test}>Update Count</Text>
    </Pressable>

    <Pressable onPress={e=>setCount(0)}>
      <Text style={[styles.test, styles.space]} >Reset Count</Text>
    </Pressable>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white"
  },
  temp:{
    color:"#111",
    fontSize:48
     
  },
 
  shit: {
    marginTop:50
  },
  test:{
    backgroundColor:"mediumblue",
   paddingStart:30,
    paddingEnd:30,
   paddingVertical:10,
    borderRadius:8,
    color:"cornflowerblue",
    fontSize:24
  },
  space:{
    marginTop:19
  }
});


 