import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    }
  }, []);

  const onButtonLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
  };
  return (
    <div>
      <h1>Home</h1>
      {token ? (
        <button onClick={onButtonLogout}>로그아웃 하기</button>
      ) : (
        <Link to="/auth/login">로그인하러 가기</Link>
      )}
      <Link to="/todo">todo</Link>
    </div>
  );
}

export default Home;
