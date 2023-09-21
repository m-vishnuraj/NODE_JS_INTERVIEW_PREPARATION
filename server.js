const axios = require("axios");

// URL of the external API (JSONPlaceholder)
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Function to fetch data from the API using Promises
function fetchData() {
  return axios
    .get(apiUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

// Call the fetchData function and log the result
fetchData()
  .then((data) => {
    console.log("Data from the API:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });
