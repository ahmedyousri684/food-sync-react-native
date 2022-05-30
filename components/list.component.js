import React, { useState } from 'react'
import { View, Text } from "native-base"
import { FlatList, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const renderedList = ({ item }) => {
    return (
        <View style={{ width: screenWidth, alignSelf: "center", borderRadius: 1, backgroundColor: "#F4891F", padding: 20 }} >
            <Text style={{ fontSize: 12, color: "black", marginBottom: 12 }}>
                {item.date},
            </Text>
            <Text style={{ fontSize: 20, color: "white", marginBottom: 15 }}>
                {item.rawMaterial.name},
            </Text>
            <Text>
                Quantity: {item.qty}  {item.rawMaterial.unit}
            </Text>
        </View >
    )
}

const renderedSalesList = ({ item }) => {
    return (
        <View style={{ width: screenWidth, alignSelf: "center", borderRadius: 1, backgroundColor: "#F4891F", padding: 20 }} >
            <Text style={{ fontSize: 12, color: "black", marginBottom: 12 }}>
                {item.saleTime},
            </Text>
            {item.products.map((product) => {
                return (
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            {product.name},
                        </Text>
                        <Text>
                            Quantity: {product.qty}
                        </Text>
                    </View>
                )
            })}
        </View >
    )
}
export const List = ({ listOfData, Header, description, refresh_control, sales }) => {
    console.log(sales, "sales flag", listOfData)
    return (
        <View>
            <Text style={{ fontSize: 20 }}>{Header}</Text>
            <FlatList
                style={{ marginBottom: screenWidth * 0.9 }}
                data={listOfData}
                renderItem={sales ? renderedSalesList : renderedList}
                ItemSeparatorComponent={() => <View style={{ height: screenWidth * 0.02 }} />}
                extraData={listOfData}
                ListEmptyComponent={() => <Text>{description}</Text>}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={true}
                refreshControl={refresh_control}
            />
        </View>
    )
}