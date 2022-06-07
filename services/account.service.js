import API from "./APIs";

export async function Login(userModel) {
    console.log(JSON.stringify(userModel))
    try {
        const response = await fetch(`${API.LOGIN}`, {
            method: "POST",
            body: JSON.stringify(userModel),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json"
            },
        });
        //onsole.log(response)
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error, 'error')
        return error;
    }
}