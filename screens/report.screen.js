import React, { useState } from "react"
import { Form } from "../components"
import { Button, View, Text } from "native-base"
import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const ReportScreen = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: 1,
            name: " Test1",
            unit: "Kg",
            Qty: 0,
        }, {
            id: 2,
            name: "Test2",
            unit: "gm",
            Qty: 0,
        },
        {
            id: 3,
            name: "Test3",
            unit: "gm",
            Qty: 0,
        }
    ])
    const [modalVisibilty, setModalVisibilty] = useState(false)
    const newData = data
    const onSubmit = (selectedValue, quantity) => {
        console.log(selectedValue, quantity)
        setModalVisibilty(false)
        // var x = data.filter( s => s.id == selectedValue )[0].Qty = quantity
        newData.map(val => {
            if (val.id == selectedValue)
                val.Qty = quantity
        })
        setData(newData)
        console.log("data", newData)
    }
    return (
        <View>
            <Text>
                zby
            </Text>
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
})