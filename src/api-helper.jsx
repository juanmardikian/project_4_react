import axios from "axios";

const baseUrl = "http://localhost:3000";

let AUTH;
let api

if (localStorage.getItem('authToken')){
  AUTH = localStorage.getItem('authToken')
}

if(AUTH){
  api = axios.create({
    baseURL: baseUrl,
    headers: {
      authorization: AUTH,
      accept: 'application/json',
    }
  });
} else {
  api = axios.create({
    baseURL: baseUrl
  });
}



export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", loginData);
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async registerData => {
  const resp = await api.post("/users/", { user: registerData });
  // localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
};

export const getAllStocks = async () => {
  let response = await api.get("/stocks");
  return response.data;
};

export const getStocksByType = async (type) => {
  let t = `/stocks_t/${type}`
  let response = await api.get(t)
  return response.data;
} 

export const BuyStock = async (symbol) => {
  
  let response = await api.put("/purchase", {symbol: symbol});
  return response.data;
}

export const AddCash = async(total) => {
  console.log(total)
  let response = await api.post("/portfolios/add_cash", {cash_to_spare: total});
  return response.data;
}

export const getPortfolio = async() => {
  let response = await api.get("/portfolios");
  return response.data;
}

// export const deleteUser = async() => {
//   let response = await api.destroy('/users/')
// }

// export const IOwnStock = async(symbol) => {
//   let response = await api.get("/");
//   return response.data;
// }