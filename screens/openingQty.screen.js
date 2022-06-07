import React, { useState, useEffect } from "react"
import { Form, List } from "../components"
import { Button, View, Text } from "native-base"
import { StyleSheet, Dimensions, RefreshControl, ActivityIndicator } from "react-native"
import { getRawMaterials, AddOpeningClosing, GetOpenningClosing } from "../services"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const OpeningQtyScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([{
        "Qty": 0,
        "id": 3,
        "name": "Test3",
        "unit": "gm",
    }]);
    const [user, setUser] = useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    const [listOfData, setList] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedQty, setSelectedQty] = useState();
    const [date, setDate] = useState("");
    const [modalVisibilty, setModalVisibilty] = useState(false)
    const [openingClosing, setOpeningClosing] = useState([]);


    const monthSpliter = (month) => {
        switch (month) {
            case 1:
                return "Jan"
            case 2:
                return "Feb"
            case 3:
                return "Mar"
            case 4:
                return "Apr"
            case 5:
                return "May"
            case 6:
                return "Jun"
            case 7:
                return "Jul"
            case 8:
                return "Aug"
            case 9:
                return "Sep"
            case 10:
                return "Oct"
            case 11:
                return "Nov"
            case 12:
                return "Dec"

        }
    }

    useEffect(async () => {
        setLoading(true);
        const nav_routes = navigation.getState().routes[0];
        if (nav_routes) {
            setUser(nav_routes.params.user)
            console.log(nav_routes.params.user, "userRoutes")
        }
        console.log(user, "userr", isLoading)
        const rawMaterials = await getRawMaterials(nav_routes.params.user.brandId);
        console.log(rawMaterials, "RawMaterialll")
        setData(rawMaterials)
        var openingClosingModel = {
            branchId: nav_routes.params.user.branchId,
            month: monthSpliter(new Date().getMonth()),
            qty: 0,
            rawMaterialId: 0,
            type: "OpenningQty"
        };
        const res_OpeingClosing = await GetOpenningClosing(openingClosingModel);
        console.log(res_OpeingClosing, "resss")
        setOpeningClosing(res_OpeingClosing)
        setList(res_OpeingClosing)
        console.log(listOfData.length, "lengggthh")
        setLoading(false)
    }, []);

    useEffect(async () => {
        //setLoading(true);
        const nav_routes = navigation.getState().routes[0];
        if (nav_routes) {
            setUser(nav_routes.params.user)
            console.log(nav_routes.params.user, "userRoutes")
        }
        console.log(user, "userr", isLoading)
        const rawMaterials = await getRawMaterials(nav_routes.params.user.brandId);
        console.log(rawMaterials, "RawMaterialll")
        setData(rawMaterials)
        var openingClosingModel = {
            branchId: nav_routes.params.user.branchId,
            month: monthSpliter(new Date().getMonth()),
            qty: 0,
            rawMaterialId: 0,
            type: "OpenningQty"
        };
        const res_OpeingClosing = await GetOpenningClosing(openingClosingModel);
        console.log(res_OpeingClosing, "resss")
        setOpeningClosing(res_OpeingClosing)
        setList(res_OpeingClosing)
        console.log(listOfData.length, "lengggthh")
        setLoading(false)
    }, [refreshing]);


    const onSubmit = async (selectedValue, quantity, sub_date) => {
        setSelectedMaterial(selectedValue);
        setSelectedQty(quantity);
        //setDate(date);
        console.log("dattteeee", sub_date, sub_date.getMonth())
        var openingClosingModel = {
            branchId: user.branchId,
            month: monthSpliter(sub_date.getMonth()),
            qty: quantity,
            rawMaterialId: selectedValue,
            type: "OpenningQty"
        };
        // var dailyModel = {
        //     branchId: user.branchId,
        //     date: sub_date.,
        //     qty: quantity,
        //     rawMaterialId: selectedValue,
        //     type: "FactoryRecivingQty"
        // };
        console.log(openingClosingModel, "sss")
        const response = await AddOpeningClosing(openingClosingModel);
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
    console.log(listOfData, "listOfData")
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
                    Add opening quantity
                </Button>
            </View>
            {(isLoading ? (<ActivityIndicator animating color={"#F4891F"} size={"large"} />) : (<View>
                <List
                    listOfData={listOfData}
                    Header={"The Opening Quantities for this month"}
                    description={"Please select Opening quantites for your raw material for this month"}
                    refresh_control={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>))}
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
