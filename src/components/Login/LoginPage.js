import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex  items-center justify-center h-screen  ">
      <div className="p-4 grid grid-flow-row gap-5 shadow-sm shadow-black">
        <h1 className="text-xl">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
}
