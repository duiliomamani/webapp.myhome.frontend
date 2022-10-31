import ApiService from "./api.service";

const SetAxiosTokenInterceptor = async (endpoint: string, getAccessTokenSilently: any): Promise<void> => {
    const token = await getAccessTokenSilently({ audience: `https://${endpoint}` });
    ApiService.http.interceptors.request.use(async config => {
        if (token) {
            const requestConfig = { ...config, headers: { "Authorization": `Bearer ${token}` } };
            return requestConfig;
        }
    })
}

export default { SetAxiosTokenInterceptor };