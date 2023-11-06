//async await
async function fetchanddisplaydata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`API request failed with status : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchanddisplaydata();
