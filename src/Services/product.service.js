import { axiosClient } from './config.service';

class ProductsService {
  // Jobs
  static listProducts() {
    // return fetchData(query);
    let url = `/items`;
    return axiosClient.get(url);
  }

  static removeProduct(id){
    let url = `/items/${id}`;
    return axiosClient.delete(url);
  }
  static addProduct(obj) {
    // return fetchData(query);
    let url = `/items`;
    return axiosClient.post(url,obj);
  }
  static editProduct(obj) {
    // return fetchData(query);
    let url = `/items/${obj.id}`;
    return axiosClient.put(url,obj);
  }
 

}
export default ProductsService;