// import { colorOfCounter } from "./helpers.js";

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const paswordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

const innerText = (id, value) =>
  (document.getElementById(id).innerText = value);

const items = {
  firstName: {
    id: "js-name-error",
    errors: {
      noName: "Please write your name",
      getMinLength: function () {
        return `Minimum length - ${this.minLength} symbols`;
      },
      minLength: 4,
      onlyLetters: "Please use letters only",
    },
  },
  lastName: {
    id: "js-last-name-error",
  },
  email: {
    id: "js-email-error",
    invalid: "E-mail is invalid",
  },
  password: {
    id: "js-password-error",
    errors: {
      noPassword: "This field is requierd",
      minLength: "Password length must be at least 8 characters",
      invalid:
        "Add one numeric digit and a special character, no longer than 15",
    },
  },
  username: {
    id: "js-username-error",
    noName: "Please create a username",
  },
};
export const registration = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  const firstName = form.get("firstName");
  if (!firstName) {
    innerText(items.firstName.id, items.firstName.errors.noName);
    return;
  } else if (firstName.length < items.firstName.errors.minLength) {
    innerText(items.firstName.id, items.firstName.errors.getMinLength());
  } else {
    innerText(items.firstName.id, "");
  }

  const lastName = form.get("lastName");
  if (!lastName) {
    innerText(items.lastName.id, items.firstName.errors.noName);
    return;
  } else if (lastName.length < items.firstName.errors.minLength) {
    innerText(items.lastName.id, items.firstName.errors.getMinLength());
  } else {
    innerText(items.lastName.id, "");
  }

  const username = form.get("username");
  if (!username) {
    innerText(items.username.id, items.username.noName);
    return;
  } else {
    innerText(items.username.id, "");
  }

  const email = form.get("email");
  if (!emailRegExp.test(email)) {
    innerText(items.email.id, items.email.invalid);
    return;
  } else {
    innerText(items.email.id, "");
  }

  const password = form.get("password");
  if (!password) {
    innerText(items.password.id, items.password.errors.noPassword);
    return;
  } else if (password.length < 8) {
    innerText(items.password.id, items.password.errors.minLength);
  } else if (!paswordRegExp.test(password)) {
    innerText(items.password.id, items.password.errors.invalid);
  } else {
    innerText(items.password.id, "");
  }

  modal[0].classList.remove("modal__show");
  modal[2].classList.add("modal__show");

  const requestData = {
    role: 1,
    firstName,
    lastName,
    email,
    username,
    password,
    disabledSeasonAnimation: false,
    language: "en",
  };

  const URL =
    "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
    // !!! ???
    mode: "no-cors",
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        console.log(response);
      } else {
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
