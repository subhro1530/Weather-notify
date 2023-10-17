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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
};

function caesarCipherEncrypt(text, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-zA-Z]/)) {
      const isUpperCase = char === char.toUpperCase();
      char = char.toUpperCase();

      const charIndex = alphabet.indexOf(char);
      const encryptedIndex = (charIndex + shift) % 26;

      const encryptedChar = alphabet.charAt(encryptedIndex);

      encryptedText += isUpperCase
        ? encryptedChar
        : encryptedChar.toLowerCase();
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}
const SignUp = () => {
  const [isredPassAlertVisible, setIsredPassAlertVisible] = useState(false);
  const [isredEmailAlertVisible, setIsredEmailAlertVisible] = useState(false);
  const [isgreenAlertVisible, setIsgreenAlertVisible] = useState(false);
  let conditionToTriggerRedPassAlert = false;
  let conditionToTriggerRedEmailAlert = false;
  let conditionToTriggerGreenAlert = false;
  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  let [cnfpassword, setCnfpassword] = useState();
  const [user, setUser] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let encryptedPass = caesarCipherEncrypt(query.password, 3);
    let encryptedConfirmedPass = caesarCipherEncrypt(cnfpassword, 3);
    console.log(query.password);
    console.log(encryptedPass);
    console.log(cnfpassword);
    console.log(encryptedConfirmedPass);
    try {
      if (
        (query.password == cnfpassword && cnfpassword === undefined) ||
        cnfpassword !== null
      ) {
        query.password = encryptedPass;
        cnfpassword = encryptedConfirmedPass;
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
      setUser(user, Data);
      conditionToTriggerGreenAlert = true;
      if (conditionToTriggerGreenAlert) {
        showGreenAlert();
      }
      setTimeout(() => {
        conditionToTriggerGreenAlert = false;
      }, 3000);
      console.log("Response Code : 200 & Data received:", Data);
      console.log(`CurrentUser:${user}`);
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
          <Alert status="warning" variant="top-accent">
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
          <Alert status="warning" variant="left-accent">
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
          <Alert status="success" variant="subtle">
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
                />
              </div>
              <div className={styles.ItemCont3}>
                <label className={styles.signUpLabel} htmlFor="password">
                  <FontAwesomeIcon icon={faKey} className={styles.customIcon} />
                  Password :{" "}
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password ..."
                  className={styles.signUpPassword}
                  id="password"
                  onChange={(event) => {
                    setQuery({ ...query, password: event.target.value });
                  }}
                />
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={styles.customEyeIcon}
                />
              </div>
              <div className={styles.ItemCont3}>
                <label className={styles.signUpLabel} htmlFor="cnfpassword">
                  Confirm Password :{" "}
                </label>
                <input
                  type="password"
                  name="cnfpassword"
                  placeholder="Enter Your Password Again ..."
                  className={styles.signUpPassword}
                  id="cnfpassword"
                  onChange={(event) => {
                    setCnfpassword(event.target.value);
                  }}
                />
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={styles.customEyeIcon}
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
                />
              </div>
              <div className={styles.ItemCont2}>
                <button className={styles.signUpBtn} type="submit">
                  Sign Up
                </button>
                <button className={styles.AlreadyRegisteredtBtn}>
                  Already Registered,
                  <Link href="/SignIn" className={styles.signUpLogIn}>
                    Log In
                  </Link>
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
