import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Result(props) {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{props.mensagem}</Text>
            <Text style={styles.resultValue}>{props.resultado}</Text>
        </View>
    );
}
