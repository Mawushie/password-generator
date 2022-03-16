const characters1 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "*",
  "!",
  "$",
];
const characters2 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=<>?.,/";

let password = "";

const passwordGenerator1 = (length = "8") => {
  for (let i = 0; i < length; i++) {
    password += characters1[Math.floor(Math.random() * characters1.length)];
  }
  return password;
};

const passwordGenerator2 = (length = "8") => {
  const charactersLength = characters2.length;
  for (let i = 0; i < length; i++) {
    password += characters2.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  console.log(password);
};

let generatePasswordBtn = document.getElementById("generate-password");
generatePasswordBtn.addEventListener("click", function () {
  let passwordLength = document.getElementById("password-length").value;
  let finalPasswords = [];

  if (!passwordLength) {
    for (let i = 0; i < 4; i++) {
      finalPassword = passwordGenerator1();
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
      finalPassword = passwordGenerator1(passwordLength);
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
