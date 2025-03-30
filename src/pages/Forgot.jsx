import AnimatedWrapper from "../components/AnimatedWrapper";
import "../styles/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
function Forgot() {
  return (
    <AnimatedWrapper>
      <div className="forgot-container">
        <div className="left">
          <img src="/images/forgot.png" alt="" />
        </div>
        <div className="right">
          <form action="">
            <div className="label">
              <h3>Forgot Password</h3>
              <p>
                Enter your email address and we will send <br /> a link to reset your password.
              </p>
            </div>

            <div className="email-con">
              <label htmlFor="email">Email</label>
              <br />
              <div className="input-container-forgot">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>

              <button>
                <a href="/reset" className="forgot-link">
                  <Link to="/reset">Send Request Link</Link>
                </a>
              </button>
              <br />
            </div>
            <div className="link">
              <a href="/login" className="forgot-link">
                <Link to="/login">Back to login</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Forgot;
