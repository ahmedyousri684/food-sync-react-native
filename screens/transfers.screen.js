import React, { useState, useEffect } from "react"
import { Form, List } from "../components";
import { Button, View, Text, Select } from "native-base";
import { StyleSheet, Dimensions, ActivityIndicator, RefreshControl, SafeAreaView, ScrollView } from "react-native"
import { AntDesign, Entypo } from '@expo/vector-icons';

import { getRawMaterials, AddDailyOperation, GetDailyOperations } from "../services"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const TransferScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([{
        "Qty": 0,
        "id": 3,
        "name": "Test3",
        "unit": "gm",
    }]);
    const [user, setUser] = useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    const [dailyOperations, setDailyOperations] = useState([]);
    const [listOfData, setList] = useState([])
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedQty, setSelectedQty] = useState();
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState("");
    const [fetchType, setFetchType] = useState("TrsIn");
    const [modalVisibilty, setModalVisibilty] = useState(false)

    useEffect(async () => {
        setLoading(true)
        const nav_routes = navigation.getState().routes[0];
        if (nav_routes) {
            setUser(nav_routes.params.user)
        }
        const rawMaterials = await getRawMaterials(nav_routes.params.user.brandId);
        setData(rawMaterials)
        var dailyModel = {
            branchId: nav_routes.params.user.branchId,
            date: new Date(),
            qty: 0,
            rawMaterialId: 0,
            type: fetchType
        };
        const res_dailyOperations = await GetDailyOperations(dailyModel);
        console.log(res_dailyOperations)
        setDailyOperations(res_dailyOperations)
        setList(res_dailyOperations)
        console.log(listOfData.length, "lengggth")
        setLoading(false)
    }, []);

    useEffect(async () => {
        setLoading(true)
        // const nav_routes = navigation.getState().routes[0];
        // if (nav_routes) {
        //     setUser(nav_routes.params.user)
        // }
        // const rawMaterials = await getRawMaterials(user.brandId);
        // setData(rawMaterials)
        var dailyModel = {
            branchId: user.branchId,
            date: new Date(),
            qty: 0,
            rawMaterialId: 0,
            type: fetchType
        };
        const res_dailyOperations = await GetDailyOperations(dailyModel);
        console.log(res_dailyOperations)
        setDailyOperations(res_dailyOperations)
        setList(res_dailyOperations)
        console.log(listOfData.length, "lengggth")
        setLoading(false)
    }, [fetchType]);

    useEffect(async () => {
        // const nav_routes = navigation.getState().routes[0];
        // if (nav_routes) {
        //     setUser(nav_routes.params.user)
        // }
        // const rawMaterials = await getRawMaterials(user.brandId);
        // setData(rawMaterials)
        var dailyModel = {
            branchId: user.branchId,
            date: new Date(),
            qty: 0,
            rawMaterialId: 0,
            type: fetchType
        };
        const res_dailyOperations = await GetDailyOperations(dailyModel);
        console.log(res_dailyOperations)
        setDailyOperations(res_dailyOperations)
        setList(res_dailyOperations)
        console.log(listOfData.length, "lengggth")
    }, [refreshing]);


    const onSubmit = async (selectedValue, quantity, sub_date, type) => {
        setSelectedMaterial(selectedValue);
        setSelectedQty(quantity);
        setDate(date);
        var dailyModel = {
            branchId: user.branchId,
            date: sub_date,
            qty: quantity,
            rawMaterialId: selectedValue,
            type: type
        };
        console.log(dailyModel, "sss")
        const response = await AddDailyOperation(dailyModel);
        console.log(response)
        setModalVisibilty(false)
    }
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <View>

            <Form
                data={data}
                modalVisibilty={modalVisibilty}
                setModalVisibilty={setModalVisibilty}
                onSubmit={onSubmit}
                isTransfer={true}
            />
            <View style={(modalVisibilty) ? { backgroundColor: "white", opacity: 0.1 } : null}>
                <Button _text={{ fontSize: 20 }} style={styles.button} onPress={() => setModalVisibilty(true)}>
                    Add transfer in or out
                </Button>
            </View>
            <View style={{ paddingLeft: 5 }}>
                <Text>
                    Choose the type of the trasnfer
                </Text>
                <Select
                    placeholder="Type"
                    selectedValue={fetchType}
                    width={screenWidth * 0.4}
                    onValueChange={(itemValue) => {
                        setFetchType(itemValue)
                    }}
                    dropdownIcon={
                        <Entypo name="chevron-down" size={20} color="lightgray" />
                    }
                >
                    <Select.Item label="Transfer IN" value="TrsIn" />
                    <Select.Item label="Transfer OUT" value="TrsOut" />
                </Select>
            </View>
            {isLoading ? (<ActivityIndicator animating color={"#F4891F"} size={"large"} />) : (<View>
                <List
                    listOfData={listOfData}
                    Header={"The transfering quantities for this month"}
                    description={"Please select transfering  quantites for your raw material for this month"}
                    refresh_control={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>)}
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
