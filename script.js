const login = () => {
  const userid = document.getElementById("uid");
  const password = document.getElementById("pass");
  //if (userid.indexOf(" ") == -1 || password.indexOf(" ") == -1) {
  if (userid.value.length == 0) {
    userid.classList.add("empty");
  } else if (userid.value != "testuser") {
    userid.classList.add("error");
  }
  if (password.value.length == 0) {
    password.classList.add("empty");
  } else if (password.value != "mypassword") {
    password.classList.add("error");
  }
};

const clean = () => {
  const userid = document.getElementById("uid");
  const password = document.getElementById("pass");
  userid.classList.remove("empty", "error");
  password.classList.remove("empty", "error");
};
