import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function SignUp() {
  return (
    <div>
      <Link to="/">홈으로 돌아가기</Link>

      <AuthForm name="회원가입" type="create" />
    </div>
  );
}

export default SignUp;
