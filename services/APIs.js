const baseUrl = "https://c7e4-156-204-133-65.ngrok.io";


export default {
    GET_ALL_PRODUCTS: `${baseUrl}/api/Products/GetPrducts`,
    GET_RAW_MATERIALS: `${baseUrl}/api/RawMaterial/GetRMsByBrandId`,
    LOGIN: `${baseUrl}/api/User/Login`,
    ADD_DAILY_OPERATION: `${baseUrl}/api/DailyOperations/AddDailyOperations`,
    GET_DAILY_OPERATIONS: `${baseUrl}/api/DailyOperations/GetDailyOperation`
};
