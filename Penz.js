import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { szinek, veletlen } from "../modules/seged";


const kepfej = require('../assets/euro-fej.gif');
const kepiras = require('../assets/euro-iras.gif');

export default function Penz(){
    const [kep,setKep] = useState(kepfej);

    function dobas(){
        const v = veletlen(1, 2);
        if(v == 1){
            setKep(kepfej);
        }else{
            setKep(kepiras);
        }
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
                    color={szinek.elso}
                    onPress={ dobas }
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