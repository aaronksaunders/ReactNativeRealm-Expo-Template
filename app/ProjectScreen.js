import React, { useCallback, useMemo } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Project, useQuery, useRealm } from "./models/Project";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import colors from "./styles/colors";

export function ProjectScreen({ navigation }) {
  const realm = useRealm();
  const result = useQuery("Project");
  const projects = useMemo(() => result.sorted("createdAt", true), [result]);

  const handleAddProject = useCallback(
    ({ name }) => {
      if (!name) {
        return;
      }
      try {
        realm.write(() => {
          const project = realm.create(
            "Project",
            new Project({ name, tasks: [] })
          );
        });
        Alert.alert("Success Creating New Project");
      } catch (e) {
        Alert.alert("Error Creating Project", e.message);
      }
    },
    [realm]
  );

  /**
   *
   */
  const handleDeleteProject = (project) => {
    try {
      realm.write(() => {
        //delete all tasks associated with project, no cascade delete
        realm.delete(project.tasks);

        // delete the actual task
        realm?.delete(realm?.objectForPrimaryKey("Project", project?._id));
      });
      Alert.alert("Success Deleting Project");
    } catch (e) {
      Alert.alert("Error Deleting Project", e.message);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <AddProjectForm onSubmit={handleAddProject} />
        <ProjectList projects={projects} onDelete={handleDeleteProject} />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    // paddingTop: 20,
    paddingHorizontal: 20,
  },
});
