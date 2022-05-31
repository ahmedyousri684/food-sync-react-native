import React, { useState, useEffect } from "react"
import { ConsumptionListComponent, Form } from "../components";
import { Button, View, Text, Select } from "native-base";
import { StyleSheet, Dimensions, ActivityIndicator, RefreshControl, SafeAreaView, ScrollView } from "react-native"
import { AntDesign, Entypo } from '@expo/vector-icons';

import { getRawMaterials, AddDailyOperation, GetDailyOperations } from "../services"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const ReportScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [listOfData, setList] = useState([
        {
            id: 1,
            rawMaterial: {
                "id": 1,
                "name": "3esh Bun",
                "unit": "piece"
            },
            consumption: 200
        },
        {
            id: 2,
            rawMaterial: {
                "id": 2,
                "name": "3esh 5 inch",
                "unit": "piece"
            },
            consumption: 200
        },
        {
            id: 3,
            rawMaterial: {
                "id": 3,
                "name": "Fries",
                "unit": "gram"
            },
            consumption: 200
        },
        {
            id: 4,
            rawMaterial: {
                "id": 4,
                "name": "Stripes",
                "unit": "piece"
            },
            consumption: -200
        },
        {
            id: 5,
            rawMaterial: {
                "id": 5,
                "name": "Chicken Piece",
                "unit": "piece"
            },
            consumption: 200
        }

    ])
    const [month, setMonth] = useState("Jan");

    const onSubmit = async () => {
        setLoading(true)
        const nav_routes = await navigation.getState().routes[0];
        var reportModel = {
            branchId: nav_routes.params.user.branchId,
            month: month,
        };
        console.log(reportModel, "sss")
        // const response = await AddDailyOperation(dailyModel);
        // console.log(response)
        // setList(response.data)
        setLoading(false)
    }
    return (
        <View style={{ paddingTop: screenWidth * 0.03 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: screenWidth * 0.01 }}>
                Monthly Consumption Report:
            </Text>
            <View style={{ paddingLeft: screenWidth * 0.01, marginBottom: screenWidth * 0.03, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: screenWidth * 0.02 }}>
                    Consumption Report Month:
                </Text>
                <Select
                    placeholder="Month"
                    selectedValue={month}
                    width={screenWidth * 0.28}
                    onValueChange={(itemValue) => {
                        setMonth(itemValue)
                    }}
                    dropdownIcon={
                        <Entypo name="chevron-down" size={20} color="lightgray" />
                    }
                >
                    <Select.Item value="Jan" label="1" />
                    <Select.Item value="Feb" label="2" />
                    <Select.Item value="Mar" label="3" />
                    <Select.Item value="Apr" label="4" />
                    <Select.Item value="May" label="5" />
                    <Select.Item value="Jun" label="6" />
                    <Select.Item value="Jul" label="7" />
                    <Select.Item value="Aug" label="8" />
                    <Select.Item value="Sep" label="9" />
                    <Select.Item value="Oct" label="10" />
                    <Select.Item value="Nov" label="11" />
                    <Select.Item value="Dec" label="12" />
                </Select>
            </View>
            <View>
                <Button _text={{ fontSize: 12 }} style={styles.button} onPress={() => onSubmit()}>
                    Calculate
                </Button>
            </View>
            <View>
                <ConsumptionListComponent
                    listOfData={listOfData}
                    Header={"The transfering quantities for this month"}
                    description={"Please select transfering  quantites for your raw material for this month"}
                />
            </View>
        </View >
    )

}
const styles = StyleSheet.create({
    button: {
        height: screenWidth * 0.1,
        width: screenWidth * 0.5,
        alignSelf: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#F4891F",
    },
})
