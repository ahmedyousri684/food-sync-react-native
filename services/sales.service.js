import API from "./APIs";

export async function AddSale(saleModel) {
    try {
        const response = await fetch(`${API.ADD_SALE}`, {
            method: "POST",
            body: JSON.stringify(saleModel),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json"

            },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error, 'error')
        return error;
    }
}

export async function GetSales(saleModel) {
    try {
        const response = await fetch(`${API.GET_SALES}`, {
            method: "POST",
            body: JSON.stringify(saleModel),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json"

            },
        });
        const json = await response.json();
        console.log("jsonnn", json)
        return json;
    } catch (error) {
        console.log(error, 'error')
        return error;
    }
}