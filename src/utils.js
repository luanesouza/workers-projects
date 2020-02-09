const axios = require('axios')

const URL = 'https://www.hatchways.io/api/assessment'

const getWorkOrders = async () => {
  const res = await axios.get(`${URL}/work_orders`);
  console.log(res.data);
  return res.data.orders;
}

const getWorker = async (id) => {
  const res = await axios.get(`${URL}/workers/${id}`)
  return res.data;
}

export { getWorkOrders, getWorker }
