import React, { useState } from "react"
import { Form } from "../components"
import { Button, View, Text } from "native-base"
import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const SettingsScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.signOut}>
                <Button style={styles.submitButton} onPress={() => navigation.navigate("Login")} >
                    Sign out
                </Button>
            </View>
        </View >
    )

}
const styles = StyleSheet.create({
    button: {
        padding: 20,
        height: screenHeight * 0.1,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#F4891F",
    },
    signOut: {
        paddingTop: screenWidth * 0.2
    },
    submitButton: {
        width: screenWidth * 0.35,
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#F4891F"
    }
})
