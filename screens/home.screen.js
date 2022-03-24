import React, { useState, useEffect } from 'react';
import { Button } from "react-native-elements";
import { FlatList, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import { HeaderComponent } from "../components"

const BrandData = [
    {
        id: "1",
        title: "Branches",
        navigate: "OpeningQty"
    },
    {
        id: "2",
        title: "Products",
        navigate: "Factory"
    },
    {
        id: "3",
        title: "Raw Materials",
        navigate: "TrsInOut"
    }
]
const DATA = [
    {
        id: "1",
        title: "Opening quantity",
        navigate: "OpeningQty"
    },
    {
        id: "2",
        title: "Factory",
        navigate: "Factory"
    },
    {
        id: "3",
        title: "Transfer IN & OUT",
        navigate: "TrsInOut"
    },
    {
        id: "4",
        title: "Sales",
        navigate: "Sales"
    },
    {
        id: "5",
        title: "Waste",
        navigate: "Waste"
    },
    {
        id: "6",
        title: "Closing quantity",
        navigate: "ClosingQty"
    },
    {
        id: "7",
        title: "Consumption Report",
        navigate: "Report"
    },
];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

export const HomeScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [role, setRole] = useState("BM")
    useEffect(() => {
        setRole("BMm")
    }, [])
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#F4891F" : "black";
        const color = item.id === selectedId ? 'black' : '#F4891F';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id)
                    navigation.navigate(item.navigate)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    const renderWelcome = () => {
        if (role == "BM") {
            return <Text style={styles.text}> Hello, Heart Attack</Text>;
        }
        return <Text style={styles.text}> Hello, Abbasya branch</Text>;
    };
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <HeaderComponent
                leftComponent={renderWelcome()}
                navigation={navigation}
            />
            <View style={styles.container}>
                <FlatList
                    data={(role == "BM") ? BrandData : DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,
        lineHeight: 49,
    },
});