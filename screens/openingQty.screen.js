import React, { useState } from "react"
import { Form } from "../components"
import { Button, View } from "native-base"

export const OpeningQty = ({ navigation }) => {
    const data = [
        {
            id: 1,
            name: " Test1",
            unit: "Kg"
        }, {
            id: 2,
            name: "Test2",
            unit: "gm"
        }
    ]
    const [modalVisibilty, setModalVisibilty] = useState(false)
    const onSubmit = (selectedValue, quantity) => {
        console.log(selectedValue, quantity)
        setModalVisibilty(false)
    }
    return (
        <View>
            <Form
                data={data}
                modalVisibilty={modalVisibilty}
                setModalVisibilty={setModalVisibilty}
                onSubmit={onSubmit}
            />
            <View style={(modalVisibilty) ? { backgroundColor: "black", opacity: 0.1 } : null}>
                <Button onPress={() => setModalVisibilty(true)}>
                    Add opening quantity
                </Button>
            </View>
        </View>
    )
}