import axios from 'axios';

export default {
  // ajax请求
  async httpRequest(option = {}) {
    const $option = option;
    let result = 'method not allow!';
    if ($option.methods === 'GET' || $option.methods === 'get') {
      result = await axios.get(option.url, {
        params: $option.data,
      });
    }
    if ($option.methods === 'POST' || $option.methods === 'post') {
      result = await axios.post($option.url, $option.data);
    }
    return result;
  },
};
