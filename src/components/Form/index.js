import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";

export default function Form() {
    const [distancia, setDistancia] = useState(null);
    const [consumo, setConsumo] = useState(null);
    const [preco, setPreco] = useState(null);
    const [mensagem, setMensagem] = useState("Informe os valores");
    const [resultado, setResultado] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function calcularConsumo() {
        if (distancia && consumo && preco) {
            let litros = distancia / consumo;
            let custo = litros * preco;

            setResultado(`Você gastará ${litros.toFixed(2)} litros e R$ ${custo.toFixed(2)}`);
            setMensagem("Resultado:");
            setDistancia(null);
            setConsumo(null);
            setPreco(null);
            setTextButton("Calcular Novamente");
        } else {
            setResultado(null);
            setMensagem("Preencha todos os campos");
            setTextButton("Calcular");
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Distância (km)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 100"
                    keyboardType="numeric"
                    onChangeText={setDistancia}
                    value={distancia}
                />

                <Text style={styles.formLabel}>Consumo Médio (km/l)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 12"
                    keyboardType="numeric"
                    onChangeText={setConsumo}
                    value={consumo}
                />

                <Text style={styles.formLabel}>Preço do Combustível (R$)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 5.50"
                    keyboardType="numeric"
                    onChangeText={setPreco}
                    value={preco}
                />

                <TouchableOpacity style={styles.button} onPress={calcularConsumo}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <Result mensagem={mensagem} resultado={resultado} />
        </View>
    );
}
