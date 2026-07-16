import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OAuthSuccess() {
  const navigate = useNavigate();

useEffect(() => {
  console.log("OAuthSuccess loaded");

  const params = new URLSearchParams(window.location.search);

  const token = params.get("token");
  const username = params.get("username");
  const email = params.get("email");
  const id = params.get("id");

  console.log({
    token,
    username,
    email,
    id,
  });

  if (token) {
    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify({
        id,
        username,
        email,
      })
    );

    console.log("Navigating to dashboard...");
    navigate("/dashboard", { replace: true });
  } else {
  // If the token is already stored, continue to dashboard
  const savedToken = localStorage.getItem("token");

  if (savedToken) {
    navigate("/dashboard", { replace: true });
  } else {
    navigate("/login", { replace: true });
  }
}
}, [navigate]);

  return <h2>Signing you in...</h2>;
}

export default OAuthSuccess;