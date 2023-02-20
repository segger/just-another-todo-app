import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Platform,
} from 'react-native';
import Task from './Task';
import { TodoTask } from './types';

export default function App() {
  const [task, setTask] = React.useState<TodoTask | undefined>();
  const [taskItems, setTaskItems] = React.useState<Array<TodoTask | undefined>>([]);

  function addTask() {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(undefined);
  }

  function completeTask(index: number) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo list</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                    <Task text={item!.text} />
                  </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Add new item"}
            value={task!.text}
            onChangeText={(text) => setTask({text: text})}
          />
          <TouchableOpacity
            onPress={() => addTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {

  }
});
