const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
  body.classList.toggle("sidebar-open");
});

function checkInputs() {
  const inputFields = document.querySelectorAll('input[required]');

  let isEmpty = false;

  inputFields.forEach(inputField => {
    const inputValue = inputField.value.trim();
    if (inputValue === '') {
      isEmpty = true;
      return;
    }
  });

  if (isEmpty) {
    alert('Please fill out all required fields.');
  } else {
    alert('Your withdrawl request has been sent. Please check you email for more information. If all the data are valid then you should receive your payment within 24 hours.');
  }
}

function showDesktopModePopup() {
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobileDevice) {
    const popupMessage = "For a better experience, please use desktop mode on your device.";
    alert(popupMessage);
  }
}

showDesktopModePopup();



