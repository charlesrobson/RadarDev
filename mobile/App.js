import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { StatusBar, YellowBox } from "react-native";
export default function App() {
  YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
    </>
  );
}
