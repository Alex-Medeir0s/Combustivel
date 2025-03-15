import React from "react";
import { View } from "react-native";
import Title from "./src/components/Title";
import Form from "./src/components/Form";

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#BBDEFB" }}>
            <Title />
            <Form />
        </View>
    );
}
