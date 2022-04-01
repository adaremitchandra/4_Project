import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Router from "./router";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
