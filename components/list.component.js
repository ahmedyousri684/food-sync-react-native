import React, { useState } from 'react'
import { View, Text } from "native-base"
import { FlatList, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const renderedList = (item) => {
    return (
        <View style={{ width: screenWidth * 0.9, alignSelf: "center", backgroundColor: "red" }} >
            <Text>
                Product Name: {item.name},
                Product Qty: {item.Qty}  {item.unit}
            </Text>
        </View >
    )
    //  id: 1,
    //  name: "Chicken PCs",
    //  unit: "piece",
    //  Qty: 0,
}

export const List = ({ listOfData }) => {
    return (
        <View>
            <Text>
                List is here
            </Text>
            <FlatList
                data={listOfData}
                renderItem={({ item }) => renderedList(item)}
            />
        </View>
    )
}