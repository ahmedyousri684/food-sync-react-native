import React, { useState } from "react"
import { Form, List } from "../components"
import { Button, View } from "native-base"
import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const OpeningQtyScreen = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Chicken PCs",
            unit: "piece",
            Qty: 0,
        }, {
            id: 2,
            name: "Stripes",
            unit: "Piece",
            Qty: 0,
        },
        {
            id: 3,
            name: "3esh 5 Inch",
            unit: "Piece",
            Qty: 0,
        },
        {
            id: 4,
            name: "3esh Bun",
            unit: "piece",
            Qty: 0,
        }, {
            id: 5,
            name: "Cheadar",
            unit: "Piece",
            Qty: 0,
        },
        {
            id: 6,
            name: "Fries",
            unit: "Piece",
            Qty: 0,
        },
        {
            id: 7,
            name: "Fries",
            unit: "Piece",
            Qty: 0,
        }
    ])
    const [listOfData, setList] = useState(null)
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
        setList(data)
        console.log("data", newData)
    }
    return (
        <View>
            <Form
                data={data}
                modalVisibilty={modalVisibilty}
                setModalVisibilty={setModalVisibilty}
                onSubmit={onSubmit}
            />
            <View style={(modalVisibilty) ? { backgroundColor: "white", opacity: 0.1 } : null}>
                <Button _text={{ fontSize: 20 }} style={styles.button} onPress={() => setModalVisibilty(true)}>
                    Add opening quantity
                </Button>
            </View>
            <View>
                <List
                    listOfData={listOfData}
                    Header={"The Opening Quantities for this month"}
                />
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
})