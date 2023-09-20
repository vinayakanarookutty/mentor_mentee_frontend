
import axios, { AxiosInstance, AxiosResponse } from "axios";
interface ICallApi {
  relativePath: string;
  method: string;
  data?: any;
}
export async function callApi(params: ICallApi) {
  const { data, method, relativePath } = params;
//   const session = await Auth.currentSession()
//   const accessToken = session.getAccessToken().getJwtToken()
//   const idToken = session.getIdToken().getJwtToken()

  const result = await axios({
    url: `http://localhost:8000/v1${relativePath}`,
    method,
    data,
 
  });
  return result as AxiosResponse;

}