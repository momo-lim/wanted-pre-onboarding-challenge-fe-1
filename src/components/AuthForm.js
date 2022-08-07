import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthForm({ name, type }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (emailValid && passwordValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [emailValid, passwordValid]);
  const onChangeEmail = (e) => {
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmail(e.target.value);
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const onChangePassword = (e) => {
    if (e.target.value.length >= 8) {
      setPassword(e.target.value);
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  const onButtonClick = () => {
    axios
      .post(`http://localhost:8080/users/${type}`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));

        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };
  return (
    <div>
      <h1>{name}</h1>
      <div>이메일</div>
      <input type="text" onChange={onChangeEmail} />
      <div>비밀번호</div>
      <input type="password" onChange={onChangePassword} />
      {isValid ? (
        <button onClick={onButtonClick}>확인</button>
      ) : (
        <button disabled>확인</button>
      )}
    </div>
  );
}

export default AuthForm;
