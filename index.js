const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=<>?.,/";

let password = "";

const passwordGenerator = (length = "8") => {
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

let generatePasswordBtn = document.getElementById("generate-password");

//generate password function
generatePasswordBtn.addEventListener("click", function () {
  let passwordLength = document.getElementById("password-length").value;
  let finalPasswords = [];

  if (!passwordLength) {
    for (let i = 0; i < 4; i++) {
      let finalPassword = passwordGenerator();
      password = "";
      finalPasswords.push(finalPassword);
    }
    document.getElementById("password1").textContent = finalPasswords[0];
    document.getElementById("password2").textContent = finalPasswords[1];
    document.getElementById("password3").textContent = finalPasswords[2];
    document.getElementById("password4").textContent = finalPasswords[3];
  } else if (passwordLength > 16) {
    document.getElementById("span").textContent =
      "Password length should not be more than 16";
  } else {
    for (let i = 0; i < 4; i++) {
      let finalPassword = passwordGenerator(passwordLength);
      password = "";
      finalPasswords.push(finalPassword);
    }
    //   console.log(finalPasswords);
    document.getElementById("password1").textContent = finalPasswords[0];
    document.getElementById("password2").textContent = finalPasswords[1];
    document.getElementById("password3").textContent = finalPasswords[2];
    document.getElementById("password4").textContent = finalPasswords[3];
  }
});
