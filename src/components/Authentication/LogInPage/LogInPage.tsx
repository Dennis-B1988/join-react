import { useState } from 'react';
import './LogInPage.css';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Log-in-page">
      <div className="Log-in-form">
        <div className="Log-in-header">
          <h1>Log in</h1>
          <img src="src/assets/img/blue-line.png" alt="underline" />
        </div>
        <div className="Log-in-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="Log-in-buttons">
          <button className="Log-in">Log in</button>
          <button className="Guest-log-in">Guest log in</button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
