import React, { useState, useEffect } from "react"
import { View, Select, Input, Text, Button } from "native-base";
import { Dimensions, Modal, StyleSheet, Pressable } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Form = (props) => {
    const data = props.data.map((item, index) => <Select.Item key={item} label={item.name} value={item.id} />)
    // const data = props.data.map((item, index) => () < Select.Item label = { item.name } value = { item.id } /> ))
    const [selctedValue, SetSelectedValue] = useState(0)
    const [unit, setUnit] = useState("")
    const [selctedQty, setSelctedQty] = useState(0.0)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisibilty}
            onRequestClose={() =>
                props.setModalVisibilty(false)
            }
        >
            <View style={{ flex: 1 }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.titleStyle}>
                            Adding
                        </Text>
                        <Pressable
                            style={{ marginLeft: screenWidth * 0.50, paddingBottom: 20 }}
                            onPress={() => props.setModalVisibilty(false)}
                        >
                            <AntDesign name="close" size={20} color="#F4891F" />
                        </Pressable>
                    </View>
                    <Select
                        placeholder="Mode of payment"
                        selectedValue={selctedValue}
                        width={screenWidth * 0.5}
                        onValueChange={(itemValue: int) => {
                            SetSelectedValue(itemValue)
                            setUnit(props.data.filter(r => r.id == itemValue)[0].unit)
                        }}
                        dropdownIcon={
                            <Entypo name="chevron-down" size={20} color="lightgray" />
                        }
                    >
                        {data}
                    </Select>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 20, paddingBottom: 50 }}>
                        <View style={{ width: screenWidth * 0.5 }}>
                            <Input placeholder="Quantity" keyboardType="number-pad" onChangeText={(text) => setSelctedQty(parseFloat(text))} />
                        </View>
                        <Text style={{ paddingLeft: 20 }}>
                            {unit}
                        </Text>
                    </View>
                    <Button style={styles.submitButton} onPress={() => props.onSubmit(selctedValue, selctedQty)} >
                        Submit
                    </Button>
                </View>
            </View>
        </Modal >
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        padding: 20,
        backgroundColor: "white",
        width: screenWidth * 0.8,
        height: screenHeight * 0.4,
        alignSelf: "center",
        marginTop: screenHeight * 0.3,
        borderRadius: 8,
        borderColor: "#F4891F",
        borderWidth: 0.5
    },
    modalTitle: {
        flexDirection: 'row'
    },
    submitButton: {
        width: screenWidth * 0.35,
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#F4891F"
    },
    titleStyle: {
        fontSize: 14,
        color: '#F4891F'
    }
})