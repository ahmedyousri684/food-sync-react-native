import React, { useState, useEffect } from "react"
import { View, Select, Input, Text, Button } from "native-base";
import { Dimensions, Modal, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const SaleForm = (props) => {
    var data = props.data.map(obj => ({ ...obj, qty: 0 }))
    const [selectedProducts, setSelectedProducts] = useState(data)
    console.log("new", selectedProducts)
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false);
    const handleDate = (e, date) => {
        console.log("here", date, e)
        if (date != undefined) {
            setDate(date)
            setShow(!show)
        }
    }
    const handleQties = (index, s_qty) => {
        var newSelected = selectedProducts;
        console.log(newSelected, index)
        if (s_qty) {
            newSelected[index].qty = s_qty;
            console.log(newSelected)
            setSelectedProducts(newSelected)
        }
    }
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
                            onPress={() => {
                                props.setModalVisibilty(false)
                                setShow(!show)
                            }}
                        >
                            <AntDesign name="close" size={20} color="#F4891F" />
                        </Pressable>
                    </View>
                    {data.map((item, index) => {
                        return (
                            <View key={item.id} style={{ flexDirection: 'row', marginBottom: screenWidth * 0.02 }}>
                                <Text
                                    style={{ width: screenWidth * 0.4, color: 'black' }}
                                >
                                    {item.name}
                                </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ width: screenWidth * 0.2, marginLeft: screenWidth * 0.05 }}>
                                        <Input key={item.id} placeholder="Quantity" keyboardType="number-pad" onChangeText={(text) => handleQties(index, parseFloat(text))} />
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#F4891F', alignSelf: 'center', marginBottom: screenWidth * 0.09 }} onPress={() => setShow(!show)} >
                        <Text style={{ fontSize: screenWidth * 0.05 }}>
                            Date: {date ? date.getDate() : null}-{date ? date.getMonth() + 1 : null}-{date ? date.getFullYear() : null}
                        </Text>
                    </TouchableOpacity>
                    {show ?
                        <DateTimePicker value={date} mode="date" onChange={handleDate} />
                        :
                        null}


                    <Button style={styles.submitButton} onPress={() => props.onSubmit(selectedProducts, date)} >
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
        height: screenHeight * 0.55,
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