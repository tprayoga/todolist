import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import React from "react";
// import DateTimePicker from "@react-native-community/datetimepicker"

export default function AddTodo() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [isToday, setIsToday] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTodo</Text>
      <View style={styles.inputContainet}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.inputContainet}>
        <Text style={styles.inputTitle}>Today</Text>
        <Switch
          value={isToday}
          onValueChange={(value) => {
            setIsToday(value);
          }}
        />
      </View>
      {/* <View style={styles.inputContainet}>
      <Text style={styles.inputTitle}>Hour</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        onChangeText={(event, selectedDate)=>{setDate(selectedDate)}}/>
      </View> */}
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white" }}>Done</Text>
      </TouchableOpacity>
      <Text style={{color:"#000060"}}>If you disable today, the task will be considered as tomorrow</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    borderBottomWidth: 1,
    width: "80%",
  },
  inputContainet: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 46,
    borderRadius: 11,
  },
});
