import React, { useState } from 'react'
import { View, Text } from "native-base"
import { FlatList, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const renderedList = ({ item }) => {
    return (
        <View style={{ width: screenWidth, alignSelf: "center", borderRadius: 1, backgroundColor: "#F4891F", padding: 20, flexDirection: "row" }} >
            <Text style={{ fontSize: 20, color: "white", marginBottom: 15, paddingRight: screenWidth * 0.04 }}>
                {item.rawMaterial.name}:
            </Text>
            <Text style={{ fontSize: 20, color: "white", }}>
                {item.consumption > 0 ? "Over" : "Short"}: {item.consumption} {item.rawMaterial.unit}
            </Text>
        </View >
    )
}


export const ConsumptionListComponent = ({ listOfData, Header, description, refresh_control, sales }) => {
    console.log(sales, "sales flag", listOfData)
    return (
        <View>
            <FlatList
                style={{ marginBottom: screenWidth * 0.9 }}
                data={listOfData}
                renderItem={renderedList}
                ItemSeparatorComponent={() => <View style={{ height: screenWidth * 0.01 }} />}
                extraData={listOfData}
                ListEmptyComponent={() => <Text>{description}</Text>}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={true}
                refreshControl={refresh_control}
            />
        </View>
    )
}