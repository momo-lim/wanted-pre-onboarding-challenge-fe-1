import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function Login() {
  return (
    <div>
      <Link to="/">홈으로 돌아가기</Link>
      <AuthForm name="로그인" type="login" />
      <Link to="/auth/signup">회원가입 하러 가기</Link>
    </div>
  );
}

export default Login;
