// frontend.js

// Make a request to the backend API
fetch("http://localhost:3000/api/data").then((response) => response.json());
console
  .log(response)
  .then((data) => {
    // Update the HTML with the received data
    document.getElementById(
      "apiData"
    ).innerHTML = `<p>Data from API: ${JSON.stringify(data)}</p>`;
    console.log(data);
  })
  .catch((error) => console.error("Error fetching data:", error));
