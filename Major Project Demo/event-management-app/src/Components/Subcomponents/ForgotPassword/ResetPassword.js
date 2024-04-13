import React, { useState } from "react";
import "../../CSS/ForgetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [newConfirmPasswordVisibility, setNewConfirmPasswordVisibility] =
    useState(false);
  const [isPasswordValidLength, setIsPasswordValidLength] = useState(false);
  const [isPasswordContainsNumber, setIsPasswordContainsNumber] =
    useState(false);
  const [isPasswordContainsSpecialChar, setIsPasswordContainsSpecialChar] =
    useState(false);
  const [isPasswordContainsLowerCase, setIsPasswordContainsLowerCase] =
    useState(false);
  const [isPasswordContainsUpperCase, setIsPasswordContainsUpperCase] =
    useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("");
  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisibility(!newPasswordVisibility);
  };
  const toggleConfirmPasswordVisibility = () => {
    setNewConfirmPasswordVisibility(!newConfirmPasswordVisibility);
  };
  const handleNewPasswordChange = (event) => {
    const password = event.target.value;
    setNewPassword(password);
    const passwordLength = password.length;
    if (passwordLength >= 8 && passwordLength <= 11) {
      setPasswordStrength("weak");
    } else if (passwordLength > 11 && passwordLength < 16) {
      setPasswordStrength("average");
    } else if (passwordLength >= 16) {
      setPasswordStrength("strong");
    }
    setIsPasswordValidLength(password.length >= 8);
    setIsPasswordContainsNumber(/\d/.test(password));
    setIsPasswordContainsSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setIsPasswordContainsLowerCase(/[a-z]/.test(password));
    setIsPasswordContainsUpperCase(/[A-Z]/.test(password));
    if (password === "") {
      setNewPasswordVisibility(false);
      setNewConfirmPassword("");
    }
  };
  const handleNewConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setNewConfirmPassword(confirmPassword);
    if (confirmPassword === "") {
      setNewConfirmPasswordVisibility(false);
    }
    validatePasswords(newPassword, confirmPassword);
  };
  const validatePasswords = (password, confirmPassword) => {
    setPasswordsMatch(password === confirmPassword);
  };
  const isPasswordDisabled =
    newPassword === "" ||
    newConfirmPassword === "" ||
    !isPasswordValidLength ||
    !isPasswordContainsNumber ||
    !isPasswordContainsSpecialChar ||
    !isPasswordContainsLowerCase ||
    !isPasswordContainsUpperCase ||
    passwordStrength == "weak" ||
    !passwordsMatch;
  return (
    <div className="frgt-password-email">
      <div className="verification-box height-adjust">
        <h1 className="head-font">Set New Password</h1>
        <p className="font" style={{ paddingBottom: "1rem" }}>
          Enter your new password below.
        </p>
        <form className="frgt-email-form">
          <div className="password-input-container">
            <input
              type={newPasswordVisibility ? "text" : "password"}
              id="password"
              name="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="Enter New Password"
              className="frgt-email-field frgt-password-field"
              required
            />
            <i
              className={`fa-solid fa-eye${
                newPasswordVisibility ? "-slash" : ""
              }`}
              onClick={toggleNewPasswordVisibility}
            />
          </div>
          {newPassword.length > 7 && (
            <p
              className={
                passwordStrength === "weak"
                  ? "weak-password"
                  : passwordStrength === "average"
                  ? "average-password"
                  : passwordStrength === "strong"
                  ? "strong-password"
                  : ""
              }
            >
              Password Strength: <strong>{passwordStrength}</strong>
            </p>
          )}
          {newPassword !== "" && !isPasswordValidLength && (
            <p className="name-error">
              Password should be at least 8 characters long
            </p>
          )}
          {newPassword !== "" && !isPasswordContainsNumber && (
            <p className="name-error">
              Password should contain at least 1 number
            </p>
          )}
          {newPassword !== "" && !isPasswordContainsSpecialChar && (
            <p className="name-error">
              Password should contain at least 1 special character
            </p>
          )}
          {newPassword !== "" && !isPasswordContainsLowerCase && (
            <p className="name-error">
              Password should contain at least 1 lowercase character
            </p>
          )}
          {newPassword !== "" && !isPasswordContainsUpperCase && (
            <p className="name-error">
              Password should contain at least 1 uppercase character
            </p>
          )}
          <br />
          <br />
          <div className="password-input-container">
            <input
              type={newConfirmPasswordVisibility ? "text" : "password"}
              id="new-password"
              value={newConfirmPassword}
              onChange={handleNewConfirmPasswordChange}
              name="new-password"
              placeholder="Confirm New Password"
              className="frgt-email-field frgt-password-field"
              disabled={newPassword === ""}
              required
            />
            <i
              className={`fa-solid fa-eye${
                newConfirmPasswordVisibility ? "-slash" : ""
              }`}
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          {newPassword !== "" &&
            newConfirmPassword !== "" &&
            !passwordsMatch && (
              <p className="name-error">Passwords do not match</p>
            )}
          <div className="button-container">
            <button
              className="back-button"
              onClick={() => window.history.back()}
            >
              Back
            </button>
            <button
              className="verify-button"
              type="submit"
              id="register"
              disabled={isPasswordDisabled}
              style={{
                cursor: isPasswordDisabled ? "not-allowed" : "pointer",
                color: isPasswordDisabled
                  ? "rgba(255, 255, 255, 0.623)"
                  : "white",
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
