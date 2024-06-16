import "./EmailForm.css";
import {  useState } from "react";


export const EmailForm = () => {
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className="emailForm">
      <h2>
        Get notified when
        we launch
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="email" placeholder="Email address" required  value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <button type="submit"  >Get notified</button>
      </form>
    </div>
  );
};
