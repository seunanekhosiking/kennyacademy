// Define a function to generate HTML dynamically
function generateDynamicHTML() {
    // Create an HTML string
    const htmlString = `
        <h1>Welcome to My Dynamic Page</h1>
        <p>This content is generated dynamically using JavaScript.</p>
    `;

    // Get the "content" div element
    const contentDiv = document.getElementById("content");

    // Set the innerHTML of the div to the generated HTML
    contentDiv.innerHTML = htmlString;
}

// Call the function to generate the HTML when the page loads
window.addEventListener("load", generateDynamicHTML);
