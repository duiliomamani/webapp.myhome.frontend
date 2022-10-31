import ApiService from "../common/api.service";
import Auth from "../common/auth.service";

const endpoint = process.env.REACT_APP_API_NOTIFICATION ?? "";

const GetNotification = async (getAccessTokenSilently: any) => {
    await Auth.SetAxiosTokenInterceptor(endpoint, getAccessTokenSilently);
    return await ApiService.GetAll("https://localhost:7105/api/v1/weatherforecast", null);
}

const ApiNotification = {
    GetNotification
}

export default ApiNotification;