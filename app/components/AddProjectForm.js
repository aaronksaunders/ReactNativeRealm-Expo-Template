import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";

import colors from "../styles/colors";

function AddProjectForm({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSubmit({name});
    setName("");
  };

  return (
    <View style={styles.form}>
      <View style={{flexDirection : 'column', flex: 1}}>
        <TextInput
          value={name}
          placeholder="Enter Project Name"
          onChangeText={setName}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
      </View>
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 'auto',
    marginBottom: 20,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
    marginBottom: 12
  },
  submit: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  icon: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default AddProjectForm;
