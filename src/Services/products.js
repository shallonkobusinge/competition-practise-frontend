
import axios from "axios";
import BASE_URL from '../utils/baseUrl'
import authHeader from '../utils/authHeader'


export async function getInProducts() {
    let products = []
    await axios.get(`${BASE_URL}/products/status/IN_STOCK`, { headers: authHeader() })
        .then((response) => {
            for (let item of response?.data?.data) {

                const data = {
                    label: item?.name,
                    value: item?._id
                }
                products.push(data)
            }
            return products


        }).catch((err) => {

        })
    return products


}