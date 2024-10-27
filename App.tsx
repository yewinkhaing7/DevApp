import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count,setCount]=useState(0);

  const increaseCount=()=>{
    setCount((countVal)=>countVal+1);
  }

  const decreaseCount=()=>{
    setCount((countVal)=>countVal-1);
  }

  const resetCount=()=>{
    setCount(0);
  }


  const logMe=(tex:string)=>{
    console.log(tex,"Clicked Me Once.");
  }

  const showAlert=()=>{
    Alert.alert("Hello! user","Are you sure to exit?1",[
      {
        text:"Cancel",
        onPress:()=>console.log("Cancel Pressed "),
        style:"cancel",
      },
      {
        text:"Exit",
        onPress:()=>console.log("Exit pressed"),
        style:"default",
      }
    ]);
  }

  const openALert=()=>{
    Alert.alert("Hi","Are you sure to open?",[
      {
        text:"Open",
        onPress:()=>console.log("Open Pressed"),
        style:"default",
      },
      {
        text:"Ok",
        onPress:()=>console.log("Ok Pressed"),
        style:"default",
      },
      

    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pressBtn}onPress={()=>logMe("Hla Hla")} >Press Me </Text>
      <Text style={styles.text} numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta excepturi nulla iure at quae, magnam amet illo molestias quidem, nam sunt perspiciatis ex facere minus commodi dolor voluptatum? Debitis.</Text>

        <Button title='test btn' color={"#000"} />
        
       

        <View>
            <Text style={styles.countNum}>{count}</Text>
        </View>
        <TouchableOpacity onPress={increaseCount} >

              <Text style={styles.pressBtn}>Increase</Text>
              
        </TouchableOpacity>

        <TouchableOpacity onPress={decreaseCount} >
            <Text  style={styles.pressBtn}>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetCount}>
          <Text style={styles.resetBtn}> Reset</Text>
        </TouchableOpacity>



        <Pressable style={({pressed})=>[
            {
              backgroundColor: pressed ? "red":"blue",
            },
            styles.btn,
        ]}
        onPress={showAlert}
        >
            <Text style={styles.textBtn}>Close</Text>
        </Pressable>

        <Pressable style={({pressed})=>[
          {
            backgroundColor:pressed ? "red":"green",
          }
        ]} 
        onPress={openALert}
        >

          <Text style={styles.testBtn}>Open</Text>
        </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    gap:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontWeight:"condensedBold",
    textAlign:"center",
  },
  textBtn:{
    fontSize:22,
    color:"white",
   
    borderRadius:10,
  },
  btn:{
    padding:10,
  },
  testBtn:{
    
    color:"white",
    padding:10,
    fontSize:22,

  },
  pressBtn:{
    backgroundColor:"blue",
    fontSize:22,
    padding:10,
    color:"white"
  },

  resetBtn:{
    backgroundColor:"red",
    fontSize:22,
    padding:10,
    color:"white",
  },
  countNum:{
    fontSize:36,
    backgroundColor:"yellow",
    color:"red",
    borderRadius:50,
    padding:20,
  }


});
