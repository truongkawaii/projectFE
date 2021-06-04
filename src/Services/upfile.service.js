
import { axiosClientFile } from './configFile.service';

class UpfileService {
  // Jobs
  static upfile(obj) {
    const url = `/uploadFile/`;
    return axiosClientFile.post(url, obj);
  }
}
export default UpfileService;
