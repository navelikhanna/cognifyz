// script.js

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data: " + response.status);
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        displayData(data); // Call a function to display data on the page
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
// Function to dynamically update the DOM
function displayData(posts) {
    const container = document.getElementById("content");
  
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
  
      const title = document.createElement("h3");
      title.textContent = post.title;
  
      const body = document.createElement("p");
      body.textContent = post.body;
  
      postElement.appendChild(title);
      postElement.appendChild(body);
  
      container.appendChild(postElement);
    });
  }
    