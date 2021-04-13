import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import Orientation from "react-native-orientation-locker";
/**
 * ? Local Imports
 */
import colors from "@colors";
import styles from "./DetailScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

const DetailScreen = ({ navigation }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      Orientation.unlockAllOrientations();
      Orientation.lockToLandscapeLeft();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text h1>Detail Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.navigate("home")}
      >
        <Text color={colors.light.white}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
