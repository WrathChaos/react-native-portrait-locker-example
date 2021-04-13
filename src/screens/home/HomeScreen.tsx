import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import Orientation from "react-native-orientation-locker";
/**
 * ? Local Imports
 */
import colors from "@colors";
import styles from "./HomeScreen.style";
import { SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface IProps {}

interface IState {}

export default class HomeScreen extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    Orientation.lockToPortrait();
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h1> HomeScreen </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.navigate(SCREENS.DETAIL)}
        >
          <Text color={colors.light.white}>Go To Detail Screen</Text>
        </TouchableOpacity>
        <Text h5></Text>
      </View>
    );
  }
}
