import { axiosClient } from './config.service';

class BranchesServices {
  // Jobs
  static listBranches() {
    let url = `/branches`;
    return axiosClient.get(url);
  }

  static editBranches(payload){
      const {id,name} = payload; 
      let url=`/branches/${id}`;
      return axiosClient.put(url,{name})
  }

  static addNew(payload){
      const {name} = payload;
      let url=`/branches`;
      return axiosClient.post(url,{name})
  }
  static deleteBranches(id){
    //   const {name,description} = payload;
      let url=`/branches/${id}`;
      return axiosClient.delete(url)
  }

  
}
export default BranchesServices;
