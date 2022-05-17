import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import TodoList from '../components/todoList';
import { todosData } from '../dataDummys';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation= useNavigation()

  const [localData, setLocalData] = React.useState(
    todosData.sort((a, b)=> {return b.isCompleted - a.isCompleted})
  )
  const [isHidden, setHidden] = React.useState(false)

  const handleHidePress=()=>{
    if (isHidden) {
      setHidden(false)
      setLocalData(todosData.sort((a, b)=> {return b.isCompleted - a.isCompleted}))
      return
    }
    setHidden(!isHidden)
    setLocalData(localData.filter(todo => !todo.isCompleted))
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
      <Text style={styles.title}>Today</Text>
      <TouchableOpacity onPress={handleHidePress}>
        <Text style={{color:"#3478F6"}}>{isHidden? "Show Completed" : "Hide Completed"}</Text>
      </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter(todo=>todo.isToday)}/>

      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData={todosData.filter(todo=>!todo.isToday)}/>
      <TouchableOpacity onPress={()=> navigation.navigate("Add")} style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
},
// pic: {
//     width: 42,
//     height: 42,
//     borderRadius: 21,
//     alignSelf: 'flex-end'
// },
container: {
    flex: 1,
    paddingHorizontal: 15
},
button: {
  width:62,
  height:62,
  borderRadius:21,
  backgroundColor:"#000",
  position:"absolute",
  bottom: 50,
  right:15,
  shadowColor:"#000",
  shadowOffset:{
    width: 0,
    height:2
  },
  shadowOpacity: .5,
  shadowRadius:5,
  elevation: 5
},
plus:{
  fontSize:40,
  color:"#fff",
  position: "absolute",
  top:-2,
  left:17
}

});