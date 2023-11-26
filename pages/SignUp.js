// components/SignUp.js
import React, { useEffect, useState } from "react";
import styles from "@/styles/SignUp.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  ChakraProvider,
  extendTheme,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faKey,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [isredPassAlertVisible, setIsredPassAlertVisible] = useState(false);
  const [isredEmailAlertVisible, setIsredEmailAlertVisible] = useState(false);
  const [isgreenAlertVisible, setIsgreenAlertVisible] = useState(false);
  let conditionToTriggerRedPassAlert = false;
  let conditionToTriggerRedEmailAlert = false;
  let conditionToTriggerGreenAlert = false;
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  let [cnfpassword, setCnfpassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCnfPasswordVisibility = () => {
    setShowCnfPassword(!showCnfPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    try {
      if (
        query.password === cnfpassword &&
        (cnfpassword !== undefined || cnfpassword !== null)
      ) {
        const response = await fetch("/api/SignUpReq&Res", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(query),
        });
        const data = await response.json();
        handleResponse(response, data);
      } else {
        conditionToTriggerRedPassAlert = true;
        if (conditionToTriggerRedPassAlert) {
          showRedPassAlert();
        }
        setTimeout(() => {
          conditionToTriggerRedPassAlert = false;
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function handleResponse(response, Data) {
    if (response.status === 200) {
      conditionToTriggerGreenAlert = true;
      if (conditionToTriggerGreenAlert) {
        showGreenAlert();
      }
      setTimeout(() => {
        conditionToTriggerGreenAlert = false;
      }, 3000);
      console.log(`CurrentUser:${Data.data.firstName} ${Data.data.lastName}`);
    } else if (response.status === 406) {
      conditionToTriggerRedEmailAlert = true;
      if (conditionToTriggerRedEmailAlert) {
        showRedEmailAlert();
      }
      setTimeout(() => {
        conditionToTriggerRedEmailAlert = false;
      }, 3000);
    }
  }

  const showRedPassAlert = () => {
    setIsredPassAlertVisible(true);
    setTimeout(() => {
      setIsredPassAlertVisible(false);
    }, 2500);
  };
  const showRedEmailAlert = () => {
    setIsredEmailAlertVisible(true);
    setTimeout(() => {
      setIsredEmailAlertVisible(false);
    }, 2500);
  };
  const showGreenAlert = () => {
    setIsgreenAlertVisible(true);
    setTimeout(() => {
      setIsgreenAlertVisible(false);
    }, 2500);
  };

  const PasswordCheck = (e) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (regex.test(e.target.value)) {
    }
  };
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#0E101F",
          position: "fixed",
          top: "0",
          // overflowhidden: "hidden",
          width: "100%",
        },
      },
    },
  });

  return (
    <>
      <Navbar />
      <ChakraProvider theme={theme}>
        {isredEmailAlertVisible && (
          <Alert
            status="warning"
            variant="top-accent"
            className={styles.alertzindexImp}
          >
            <AlertIcon />
            Already Registered! with the same Email Id ...
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsredEmailAlertVisible(false)}
            />
          </Alert>
        )}
      </ChakraProvider>
      <ChakraProvider theme={theme}>
        {isredPassAlertVisible && (
          <Alert
            status="warning"
            variant="left-accent"
            className={styles.alertzindexImp}
          >
            <AlertIcon />
            Password & Confirm Password does not matched ...
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsredPassAlertVisible(false)}
            />
          </Alert>
        )}
      </ChakraProvider>
      <ChakraProvider theme={theme}>
        {isgreenAlertVisible && (
          <Alert
            status="success"
            variant="subtle"
            className={styles.alertzindexImp}
          >
            <AlertIcon />
            You are successfully registered ...
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsgreenAlertVisible(false)}
            />
          </Alert>
        )}
      </ChakraProvider>
      <div className={styles.body}>
        <div className={styles.signCont}>
          <h1 className={styles.signTitle}>Sign Up</h1>
          <div className={styles.signInfoItems}>
            <form className={styles.signUpForm} onSubmit={handleSubmit}>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="firstName">
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className={styles.customIcon}
                  />
                  First Name :{" "}
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter Your First Name ..."
                  className={styles.firstName}
                  id="firstName"
                  onChange={(event) => {
                    setQuery({ ...query, firstName: event.target.value });
                  }}
                  required
                />
              </div>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="lastName">
                  Last Name :{" "}
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter Your Last Name ..."
                  className={styles.firstName}
                  id="lastName"
                  onChange={(event) => {
                    setQuery({ ...query, lastName: event.target.value });
                  }}
                  required
                />
              </div>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="signUpemail">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.customIcon}
                  />
                  Email :{" "}
                </label>
                <input
                  name="signUpemail"
                  type="email"
                  placeholder="Enter Your Email ..."
                  className={styles.signUpemail}
                  id="signUpemail"
                  onChange={(event) => {
                    setQuery({ ...query, email: event.target.value });
                  }}
                  required
                />
              </div>
              <div className={styles.ItemCont3}>
                <label className={styles.signUpLabel} htmlFor="password">
                  <FontAwesomeIcon icon={faKey} className={styles.customIcon} />
                  Password :{" "}
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password ..."
                  className={styles.signUpPassword}
                  id="password"
                  onChange={(event) => {
                    setQuery({ ...query, password: event.target.value });
                  }}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className={styles.customEyeIcon}
                  id="passwordEye"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className={styles.ItemCont3}>
                <label className={styles.signUpLabel} htmlFor="cnfpassword">
                  Confirm Password :{" "}
                </label>
                <input
                  type={showCnfPassword ? "text" : "password"}
                  name="cnfpassword"
                  placeholder="Enter Your Password Again ..."
                  className={styles.signUpPassword}
                  id="cnfpassword"
                  onChange={(event) => {
                    setCnfpassword(event.target.value);
                  }}
                  required
                />
                <FontAwesomeIcon
                  icon={showCnfPassword ? faEye : faEyeSlash}
                  className={styles.customEyeIcon}
                  id="cnfpasswordEye"
                  onClick={toggleCnfPasswordVisibility}
                />
              </div>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="phone">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={styles.customIcon}
                  />
                  Phone Number :{" "}
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter Your Phone Number ..."
                  className={styles.signUpPassword}
                  id="phone"
                  onChange={(event) => {
                    setQuery({ ...query, phone: event.target.value });
                  }}
                  required
                />
              </div>
              <div className={styles.ItemCont}>
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  checked={termsAccepted}
                />
                <label htmlFor="termsCheckbox" className={styles.termsLabel}>
                  I accept the terms and conditions
                </label>
              </div>
              <div className={styles.ItemCont2}>
                <button
                  className={styles.signUpBtn}
                  type="submit"
                  disabled={!termsAccepted}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
