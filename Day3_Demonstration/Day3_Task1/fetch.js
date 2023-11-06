const colorarray = [
  "#4780BB",
  "#f6a539",
  "#f69346",
  "#55b8bc",
  "#39a764",
  "#71c2c6",
  "#39a764",
];
fetch("https://api.msigma.in/btech/v2/branches/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let j = 0; j < 5; j++) {
      const mainDiv = document.createElement("div"); //Main div created
      mainDiv.className = "section";
      for (let i = 2 * j; i <= 2 * j + 1; i++) {
        const newDiv = document.createElement("div"); // Create a new <div> element
        newDiv.className = "left";
        // Create a new element
        let colored = Math.floor(Math.random() * colorarray.length);
        let newHeading = document.createElement("h1");
        newHeading.className = "Heading";
        newHeading.textContent = data.branches[i].short;
        newHeading.style.color = colorarray[colored];
        let newLine = document.createElement("p");
        newLine.textContent = data.branches[i].name;
        let newButton = document.createElement("button");
        newButton.textContent = "Apply Now";
        newButton.style.color = colorarray[colored];
        newButton.style.border = `1px solid ${colorarray[colored]}`;
        let newPara = document.createElement("p");
        newPara.textContent = "Fee starting at ₹799 per subject";

        // Append the new <h1> element to the new <div>
        newDiv.appendChild(newHeading);
        newDiv.appendChild(newLine);

        newDiv.appendChild(newButton);
        newDiv.appendChild(newPara);

        // Append the new <div> to an existing element (e.g., body)
        mainDiv.appendChild(newDiv);
      }
      document.body.appendChild(mainDiv);
    }
  });
