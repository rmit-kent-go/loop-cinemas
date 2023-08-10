const USERS_KEY = "users";
const USER_KEY = "user";
const USEREMAIL_KEY = "email";
const USERPASSWORD_KEY = "password";

// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {
  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  // Hard-coded user data, passwords are in plain-text.
  const users = [
    {
      username: "mbolger",
      email: "mbolger@email.com",
      password: "abc123",
      date_join: "3 Mar 2023"
    },
    {
      username: "shekhar",
      email: "shekhar@email.com",
      password: "def456",
      date_join: "31 Jan 2023"
    }
  ];

  // Set data into local storage.
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Get the users array from local storage
function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);

  // Convert data to objects.
  return JSON.parse(data);
}

// Add newly signed-up user's name, email, password into local storage
function addNewUser(newUsername, newEmail, newPassword) {
  const users = getUsers();
  users.push({
    username: newUsername,
    email: newEmail,
    password: newPassword
  });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// NOTE: In this example the login is also persistent as it is stored in local storage.
// Verify the user email and password by comparing with user data stored in local storage
function verifyUser(email, password) {
  const users = getUsers();
  for(const user of users) {
    if(email === user.email && password === user.password)
    {
      setUser(user.username, user.email, user.password);
      return true;
    }
  }

  return false;
}

// Remove user from local storage
function deleteUser(currUsername) {
  const users = getUsers();

  for(const user of users) {
    if(currUsername === user.username)
    {
      const userIndex = users.indexOf(user);
      users.splice(userIndex, 1);
      break;
    }
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Set signed-in user's individual data fields into local storage
function setUser(username, email, password) {
  localStorage.setItem(USER_KEY, username);
  localStorage.setItem(USEREMAIL_KEY, email);
  localStorage.setItem(USERPASSWORD_KEY, password);
}

// Get signed-in user's username field from local storage
function getUser() {
  return localStorage.getItem(USER_KEY);
}

// Get signed-in user's email field from local storage
function getEmail() {
  return localStorage.getItem(USEREMAIL_KEY);
}

// Get signed-in user's password field from local storage
function getPassword() {
  return localStorage.getItem(USERPASSWORD_KEY);
}

// Delete all signed-in user's individual data field in local storage
function removeUser() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(USEREMAIL_KEY);
  localStorage.removeItem(USERPASSWORD_KEY);
}

export {
  initUsers,
  verifyUser,
  addNewUser,
  deleteUser,
  getUser,
  getEmail,
  getPassword,
  removeUser
}
