import { axiosClient } from './config.service';

class CategoriesServices {
  // Jobs
  static listCategories() {
    let url = `/categories`;
    return axiosClient.get(url);
  }

  static editCategories(payload){
      const {id,name} = payload; 
      let url=`/categories/${id}`;
      return axiosClient.put(url,{name})
  }

  static addNew(payload){
      const {name} = payload;
      let url=`/categories`;
      return axiosClient.post(url,{name})
  }
  static deleteCategory(id){
    //   const {name,description} = payload;
      let url=`/categories/${id}`;
      return axiosClient.delete(url)
  }

  
}
export default CategoriesServices;
