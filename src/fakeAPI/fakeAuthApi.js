const users = [{ username: "ashish", password: "shetty" }];

const findUserByName = (username) => {
  
  return users.find((user) => user.username === username);
};

export function fakeAuthApi(username, password) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByName(username);


      if (user.password === password) {
        resolve({ success: true, status: 200 });
      }

      reject({ success: false, status: 401 });
    }, 2000);
  });
}
