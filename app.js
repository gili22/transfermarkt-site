// const md5 = require('md5');
// alert(`MD5 generated from index.js: ${md5('1234')}`);
// global.window.md5 = md5;

// const fs = require('fs');
// const request = require('request');

// import request from "request";
// import fs from "fs";

// const url = "https://transfermarkt-api.vercel.app/players/28003/profile";
// const headers = {
//   accept: "application/json",
// };

// var myBody = {};
// request(
//   {
//     url,
//     headers,
//   },

//   (err, response, body) => {
//     if (err) {
//       console.error(err);
//     } else {
//       myBody = JSON.parse(body);

//       console.log(myBody.name);
//     }

//     fs.writeFileSync("data.json", JSON.stringify(myBody));
//   }
// );

// CHATGPT CODE:
// const url = 'https://transfermarkt-api.vercel.app/players/28003/profile';

// const headers = {
//   'accept': 'application/json'
// };

// fetch(url, { headers })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const myBody = data;
//     console.log(myBody.name);

//     // Convert data to a JSON Blob
//     const jsonData = new Blob([JSON.stringify(myBody)], { type: 'application/json' });

//     // Create a download link
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(jsonData);
//     downloadLink.download = 'data.json';

//     // Trigger the download
//     downloadLink.click();
//   })
//   .catch((error) => {
//     console.error('Fetch error:', error);
//   });
