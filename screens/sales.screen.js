import React, { useState, useEffect } from "react"
import { Form, List } from "../components"
import { Button, View, Text } from "native-base"
import { StyleSheet, Dimensions } from "react-native"
import { getBrandProducts } from "../services"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const SalesScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([{
        "Qty": 0,
        "id": 3,
        "name": "Test3",
        "unit": "gm",
    }]);
    const [listOfData, setList] = useState([])
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedQty, setSelectedQty] = useState();
    const [date, setDate] = useState(new Date());
    const [modalVisibilty, setModalVisibilty] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const products = await getBrandProducts(3)
            setData(products)
        }
        setLoading(true);
        fetchData();
    }, []);


    const onSubmit = (selectedValue, quantity, date) => {
        console.log(selectedValue, quantity, date, "sss")
        setSelectedMaterial(selectedValue);
        setSelectedQty(quantity);
        setDate(date);
        setModalVisibilty(false)
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
                    Add Products Sales
                </Button>
            </View>
            <View>
                <List
                    listOfData={listOfData}
                    Header={"The Product sales for this month"}
                    description={"Please select product sales for this month"}
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
