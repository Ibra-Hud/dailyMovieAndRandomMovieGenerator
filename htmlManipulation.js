const submitButton = document.querySelector("button#generate-movie");

const clickEventHandler = (event) => {
  console.log("Test Succeed");
  console.log(`Event triggered by: #${event.target.id} (event.target)`);
  console.log(`Handled by: #${event.currentTarget.id} (event.currentTarget)`);
};

submitButton.addEventListener("click", clickEventHandler);
