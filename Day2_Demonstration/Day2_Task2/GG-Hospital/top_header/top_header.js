document.addEventListener("DOMContentLoaded", async function () {
  try {
    const request = fetch("https://dummyjson.com/users");

    const response = await request;

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);

    if (data && data.users && data.users.length >= 4) {
      const usersArray = data.users;

      usersArray.forEach((user, index) => {
        const firstName = user.firstName;
        const lastName = user.lastName;
        const companyDepartment = user.company.department;
        const companyImage = user.image;

        const specialistName = document.getElementById(
          "specialist-name-" + (index + 1)
        );

        const specialistDepartment = document.getElementById(
          "specialist-department-" + (index + 1)
        );
        const specialistImage = document.getElementById(
          "specialist-image-" + (index + 1)
        );

        if (specialistName && specialistDepartment && specialistImage) {
          specialistName.textContent = `${firstName} ${lastName}`;
          specialistDepartment.textContent = companyDepartment;
          specialistImage.src = companyImage;
        }
      });
    } else {
      console.error("Data structure does not match expectations");
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
});
