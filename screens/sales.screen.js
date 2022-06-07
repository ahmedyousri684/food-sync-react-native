import React, { useState, useEffect } from "react"
import { SaleForm, List } from "../components"
import { Button, View, Text } from "native-base"
import { StyleSheet, Dimensions, ActivityIndicator, RefreshControl, SafeAreaView, ScrollView } from "react-native"
import { getBrandProducts, AddSale, GetSales } from "../services"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const SalesScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([{
        "Qty": 0,
        "id": 3,
        "name": "Test3",
        "unit": "gm",
    }]);
    const [user, setUser] = useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    const [sales, setSales] = useState([]);
    const [listOfData, setList] = useState([])
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedQty, setSelectedQty] = useState();
    const [date, setDate] = useState(new Date());
    const [modalVisibilty, setModalVisibilty] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(async () => {
        setLoading(true);
        const nav_routes = await navigation.getState().routes[0];
        setUser(nav_routes.params.user)
        console.log(user.brandId, "user")
        const brandProducts = await getBrandProducts(3);
        console.log(brandProducts)
        setData(brandProducts)
        var saleModel = {
            branchId: nav_routes.params.user.branchId,
            salesDate: new Date(),
        };
        console.log("before", saleModel)
        const res_sales = await GetSales(saleModel);
        console.log(res_sales)
        setSales(res_sales)
        setList(res_sales)
        console.log(listOfData.length, "lengggth")
        setLoading(false)
    }, [])

    useEffect(async () => {
        console.log("refreshing", refreshing)
        const nav_routes = await navigation.getState().routes[0];
        setUser(nav_routes.params.user)
        console.log(user.brandId, "user")
        const brandProducts = await getBrandProducts(3);
        console.log(brandProducts)
        setData(brandProducts)
        var saleModel = {
            branchId: nav_routes.params.user.branchId,
            salesDate: new Date(),
        };
        console.log("before", saleModel)
        const res_sales = await GetSales(saleModel);
        console.log(res_sales)
        setSales(res_sales)
        setList(res_sales)
        console.log(listOfData.length, "lengggth")

    }, [refreshing]);


    const onSubmit = async (selectedProducts, sub_date) => {
        const nav_routes = await navigation.getState().routes[0];
        console.log(nav_routes.params.user.branchId, "ssssubmiit")
        setSelectedProducts(selectedProducts);
        setDate(date);
        var saleModel = {
            branchId: nav_routes.params.user.branchId,
            saleDate: sub_date,
            products: selectedProducts
        };
        console.log(saleModel, "sss")
        const response = await AddSale(saleModel);
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
    console.log("fteched", data)
    console.log("Loading", isLoading)

    return (
        <View>
            {isLoading ?
                <ActivityIndicator />
                :
                <SaleForm
                    data={data}
                    modalVisibilty={modalVisibilty}
                    setModalVisibilty={setModalVisibilty}
                    onSubmit={onSubmit}
                    isProducts={true}
                />
            }
            <View style={(modalVisibilty) ? { backgroundColor: "white", opacity: 0.1 } : null}>
                <Button _text={{ fontSize: 20 }} style={styles.button} onPress={() => setModalVisibilty(true)}>
                    Add Products Sales
                </Button>
            </View>
            {isLoading ? (<ActivityIndicator />) : (

                <View>
                    <List
                        listOfData={listOfData}
                        Header={"The Product sales for this month"}
                        description={"Please select product sales for this month"}
                        refresh_control={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        sales={true}
                    />
                </View>
            )}

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
