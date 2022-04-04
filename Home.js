import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { szinek } from "../modules/seged";

export default function Home(props){
    return(
        <View style={styles.page}>
            <View style={styles.button}>
                <Button
                    title="Pénzfeldobás" //paraméterként a képernyő nevét adtuk meg, ami a textben van
                    color={szinek.elso}
                    onPress={() => props.navigation.navigate("Pénzfeldobás")}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Kockadobás"
                    color={szinek.masodik}
                    onPress={() => props.navigation.navigate("Kockadobás")}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
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