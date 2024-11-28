import LogInForm from './LogInForm/LogInForm';
import './LogInPage.css';

function LogInPage() {
  return (
    <div className="Log-in-page">
      <div className="Log-in-header">
        <img src="src/assets/img/logo.svg" alt="logo" />
        <div className="Sign-up">
          <span>Not a Join user?</span>
          <button className="Sign-up-button">Sign up</button>
        </div>
      </div>
      <LogInForm />
      <div className="Log-in-footer">
        <span>Privacy Policy</span>
        <span>Legal notice</span>
      </div>
    </div>
  );
}

export default LogInPage;
