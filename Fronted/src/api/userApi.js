import { base_url, api_version } from "../constants/UrlPath";
// api para crear un usuario
export const userSignUp = (dataUser) => {
  const url = `${base_url}/${api_version}/createUser`;
  const initRequest = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, initRequest)
    .then((res) => res.json())
    .then((result) => result)
    .catch((err) => err);
};

//Api para loguear usuario
export const userSignIn = (dataUser) => {
  console.log("ENTRA EN USERSGININ DE USER API");
  const url = `${base_url}/${api_version}/log-in`;
  const requestInit = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, requestInit)
    .then((res) => res.json())
    .then((result) => result) //este result es el que va hacia el login
    .catch((err) => console.log(err));
};
