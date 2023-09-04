// Please do not change the prewritten code
const axios = require("axios");

const Solution = async () => {
  // Write your code here
  try {
    const res = await axios.get('https://api.codingninjas.com/api/v3/event_tags')
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
  
};

Solution();
module.exports = Solution;
