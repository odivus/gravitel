import { useState } from "react";
import {gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useSetTitle } from "../../hooks/use-set-title";

import "./Login.css";

function Login() {
  useSetTitle("Login");

  const LOGIN_MUTATION = gql`
    mutation LoginMutation(
      $username: String!
      $password: String!
    ) {
      login(username: $username, password: $password) {
        username,
        password,
        token,
      }
    }
  `;

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    login: "",
    password: "",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      username: formState.login,
      password: formState.password,
    },
  });

  async function submit(e) {
    e.preventDefault();

    if (localStorage.getItem("token")) {
      return navigate("/dashboard");
    }

    try {
      const response = await login();
      if (response) {
        const token = response.data.login.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }    
  }

  return (
    <div className="login-wrap">
      <div className="login">
        <h3 className="h3">Вход</h3>
        <div className="message">
          Уникальная технология, доступная для вашего бизнеса уже сейчас!
        </div>
        <form className="form" onSubmit={submit}>
          <input 
            required
            type="text" 
            name="login" 
            placeholder="Логин" 
            onChange={(e) => 
              setFormState({
              ...formState,
              login: e.target.value
              })
            }
          />
          <input 
            required
            type="password" 
            name="password" 
            placeholder="Пароль" 
              onChange={(e) => 
                setFormState({
                ...formState,
                password: e.target.value
                })
              }
            />
          <button className="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;