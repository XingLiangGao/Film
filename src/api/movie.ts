/**
 * movie模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例

interface ComingSoonInterface {
  cityId: number;
  pageNum: number;
  pageSize: number;
  type: number;
  k: number;
}

const movie = {
  // 正在热映
  inTheaters() {
    return axios.get('/v2/movie/in_theaters');
  },
  // 即将上映
  comingSoon(params: ComingSoonInterface) {
    return axios.get('/gateway', {
      params,
    });
  },
};

export default movie;
