import { useEffect, useState } from "react";

function Profile() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [authType, setAuthType] = useState("");

const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

useEffect(() => {
    const savedCurrentUser = localStorage.getItem("animeverseCurrentUser");
    if (savedCurrentUser) {
      setCurrentUser(JSON.parse(savedCurrentUser));
    }
  }, []);

const handleRegisterChange = (e) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSignInChange = (e) => {
    setSignInData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setAuthMessage("");
    setAuthType("");

const { username, email, password, confirmPassword } = registerData;

if (!username || !email || !password || !confirmPassword) {
      setAuthMessage("Please fill all fields.");
      setAuthType("error");
      return;
    }

if (password !== confirmPassword) {
      setAuthMessage("Passwords do not match.");
      setAuthType("error");
      return;
    }

const userData = { username, email, password };

localStorage.setItem("animeverseRegisteredUser", JSON.stringify(userData));
    localStorage.setItem("animeverseCurrentUser", JSON.stringify(userData));
    setCurrentUser(userData);

setRegisterData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

setAuthMessage("Registration successful!");
    setAuthType("success");
  };

const handleSignInSubmit = (e) => {
    e.preventDefault();
    setAuthMessage("");
    setAuthType("");

const savedRegisteredUser = localStorage.getItem("animeverseRegisteredUser");

if (!savedRegisteredUser) {
      setAuthMessage("No registered user found. Please register first.");
      setAuthType("error");
      return;
    }

const parsedUser = JSON.parse(savedRegisteredUser);

if (
      signInData.email === parsedUser.email &&
      signInData.password === parsedUser.password
    ) {
      localStorage.setItem("animeverseCurrentUser", JSON.stringify(parsedUser));
      setCurrentUser(parsedUser);
      setSignInData({
        email: "",
        password: "",
      });
      setAuthMessage("Sign in successful!");
      setAuthType("success");
    } else {
      setAuthMessage("Invalid email or password.");
      setAuthType("error");
    }
  };

const handleLogout = () => {
    localStorage.removeItem("animeverseCurrentUser");
    setCurrentUser(null);
    setAuthMessage("");
    setAuthType("");
    setIsSignIn(true);
  };

if (currentUser) {
    return (
      <section className="section profile-auth-section">
        <div className="container">
          <div className="profile-logged-card fade-up">
            <div className="profile-avatar-large">
              {currentUser.username.charAt(0).toUpperCase()}
            </div>

<h2 className="profile-welcome">Welcome, {currentUser.username}</h2>
            <p className="profile-email">{currentUser.email}</p>

<div className="profile-info-grid">
              <div className="profile-info-box">
                <span>Username</span>
                <strong>{currentUser.username}</strong>
              </div>

<div className="profile-info-box">
                <span>Email</span>
                <strong>{currentUser.email}</strong>
              </div>
            </div>

<button className="btn profile-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    );
  }

return (
    <section className="section profile-auth-section">
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-card fade-up">
            <div className="auth-left">
              <img
                src="profile-anime.jpg"
                alt="Anime"
              />
            </div>

<div className="auth-right">
              <div className="auth-toggle">
                <button
                  className={`toggle-btn ${isSignIn ? "active" : ""}`}
                  onClick={() => {
                    setIsSignIn(true);
                    setAuthMessage("");
                    setAuthType("");
                  }}
                  type="button"
                >
                  Sign In
                </button>

<button
                  className={`toggle-btn ${!isSignIn ? "active" : ""}`}
                  onClick={() => {
                    setIsSignIn(false);
                    setAuthMessage("");
                    setAuthType("");
                  }}
                  type="button"
                >
                  Register
                </button>
              </div>

<div className="auth-content">
                {isSignIn ? (
                  <>
                    <h1>Welcome Back</h1>
                    <p>Sign in to continue your anime journey.</p>

<form className="auth-form" onSubmit={handleSignInSubmit}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={signInData.email}
                        onChange={handleSignInChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={signInData.password}
                        onChange={handleSignInChange}
                        required
                      />
                      <button type="submit" className="btn auth-submit-btn">
                        Sign In
                      </button>
                    </form>

<div className="auth-switch-text">
                      <p>
                        Don&apos;t have an account?{" "}
                        <span onClick={() => setIsSignIn(false)}>Register</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Create Account</h1>
                    <p>Join Animeverse and start building your anime world.</p>

<form className="auth-form" onSubmit={handleRegisterSubmit}>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={registerData.username}
                        onChange={handleRegisterChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required
                      />
                      <button type="submit" className="btn auth-submit-btn">
                        Register
                      </button>
                    </form>

<div className="auth-switch-text">
                      <p>
                        Already have an account?{" "}
                        <span onClick={() => setIsSignIn(true)}>Sign In</span>
                      </p>
                    </div>
                  </>
                )}

{authMessage && (
                  <p className={`auth-status ${authType}`}>{authMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
