import React from "react";
import Button from "../UI/Button";
import styles from "./LoginForm.module.css";
import LoginWith from "./LoginWith";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div>
        <label>Email</label>
        <input />
      </div>
      <div>
        <label>Password</label>
        <input />
      </div>
      <div className={styles.button}>
          <Button className="bg-[#3CCF4E]" name="Submit"/>
      </div>
      <div className=" col-span-2">
          <LoginWith/>
      </div>
    </form>
  );
}
