import React, { useState } from 'react'
import { View, Text } from "native-base"
import { FlatList, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const renderedList = ({ item }) => {
    return (
        <View style={{ width: screenWidth * 0.9, alignSelf: "center", borderRadius: 16, backgroundColor: "#F4891F", padding: 20 }} >
            <Text style={{ fontSize: 20, color: "white", marginBottom: 20 }}>
                {item.name},
            </Text>
            <Text>
                Quantity: {item.Qty}  {item.unit}
            </Text>
        </View >
    )
    //  id: 1,
    //  name: "Chicken PCs",
    //  unit: "piece",
    //  Qty: 0,
}

export const List = ({ listOfData, Header }) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{Header}</Text>
            <FlatList
                style={{ marginBottom: 80 }}
                data={listOfData}
                renderItem={renderedList}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                extraData={listOfData}
                ListEmptyComponent={() => <Text>Please select Opening quantites for your raw material for this month</Text>}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={true}
            />
        </View>
    )
}