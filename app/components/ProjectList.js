import React from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import { Project } from "../models/Project";
import colors from "../styles/colors";

import TaskItem from "./TaskItem";

function ProjectList({ projects, onDelete }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={projects}
        keyExtractor={(Project) => Project._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.project}>
            <View style={styles.projectContainer}>
              <Text style={styles.projectDescription} numberOfLines={1}>
                {item.name} {item.tasks?.length}
              </Text>
              <Text style={styles.projectCreatedAt} numberOfLines={1}>
                {item.createdAt.toString()}
              </Text>
            </View>
            <Pressable onPress={()=> onDelete(item)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  project: {
    height: 50,
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
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
  projectContainer: {
    flex: 1,
    justifyContent: "center",
  },
  projectDescription: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
  projectCreatedAt: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 12,
  },
  status: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.gray,
  },
  completed: {
    backgroundColor: colors.purple,
  },
  deleteButton: {
    justifyContent: "center",
  },
  deleteText: {
    marginHorizontal: 10,
    color: colors.gray,
    fontSize: 17,
  },
  icon: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ProjectList;
