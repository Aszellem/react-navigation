import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { szinek, veletlen } from "../modules/seged";

const kepek = [
    require('../assets/k1.png'),require('../assets/k2.png'),
    require('../assets/k3.png'),require('../assets/k4.png'),
    require('../assets/k5.png'),require('../assets/k6.png')
];

export default function Kocka(){
    const [kep,setKep] = useState(kepek[5]);

    function dobas(){
        setKep(kepek[veletlen(1, 6)-1]);
    }

    return(
        <View style={styles.page}>
            <Image 
                source={kep}
                style={styles.size}
            />
            <View style={styles.button}>
                <Button
                    title="Dobás"
                    color={szinek.masodik}
                    onPress={dobas}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    size: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 20
    },
    page: {
        padding: 10,
        flex:1,
        alignItems: "center"
    },
    button: {
        width: 200,
        margin: 10
    }
})