import React, { Component } from "react";
import { View, TextInput } from "react-native";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";

export default function App() {
  return (
    <View>
      <TextInput value={LOREM} multiline />
      <TextInput
        style={{ fontFamily: "OpenSans-Bold" }} // Broke
        value={LOREM}
        multiline
      />
      <TextInput
        style={{ fontFamily: "Nunito-Regular", fontWeight: "100" }}
        value={LOREM}
        multiline
      />
      <TextInput
        style={{ fontFamily: "DK Sugary Pancake" }}
        value={LOREM}
        multiline
      />
    </View>
  );
}
