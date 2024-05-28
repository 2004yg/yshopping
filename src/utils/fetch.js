// fetch.js
/* const baseURL = 'http://localhost:8080'; */ // 假设这是你的 API 地址
const baseURL = 'http://1.94.14.36/api/'; // 假设这是你的 API 地址
// 封装一个请求函数，接收路径和请求配置作为参数
const request = async (path, options = {}) => {
  let response;
  try {
     //如果是GET请求，且有参数提交
     if(options.method==undefined && options!={}){
      var url=new URL(`${baseURL}${path}`);
      url.search=new URLSearchParams(options).toString();
      response = await fetch(url);
     } else{
      response = await fetch(`${baseURL}${path}`,options);
     }
   
    const data = await response.json();
    if (!response.ok) {
      throw new Error( '请求失败');
    }
    return data;
  } catch (error) {
    throw new Error(error.message || '请求失败');
  }
};

export default request;