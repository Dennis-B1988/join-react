import { useState } from 'react';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="Log-in-form">
      <div className="Log-in-title">
        <h1>Log in</h1>
        <img src="src/assets/img/blue-line.png" alt="underline" />
      </div>
      <div className="Log-in-input-container">
        <div className="Log-in-input">
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <img src="src/assets/img/mail.png" alt="email-icon" />
        </div>
        <div className="Log-in-input">
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <img src="src/assets/img/lock.png" alt="password-icon" />
        </div>
      </div>
      <div className="Log-in-buttons">
        <button className="Log-in" onClick={handleFormSubmit}>
          Log in
        </button>
        <button className="Guest-log-in">Guest log in</button>
      </div>
    </div>
  );
}

export default LogInForm;
