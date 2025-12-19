// Welcome name
const userName = prompt("Masukkan nama kamu:");
if (userName) {
  document.getElementById("userName").textContent = userName;
}

// Form validation & output
const form = document.getElementById("messageForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("messageText").value;

  document.getElementById("result").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});

const learnBtn = document.getElementById('learn-btn');
const profileInfo = document.getElementById('profile-info');

learnBtn.addEventListener('click', () => {
  if(profileInfo.style.maxHeight && profileInfo.style.maxHeight !== "0px") {
    // collapse
    profileInfo.style.maxHeight = "0px";
    profileInfo.style.opacity = "0";
  } else {
    // expand
    profileInfo.style.maxHeight = profileInfo.scrollHeight + "px";
    profileInfo.style.opacity = "1";
  }
});
