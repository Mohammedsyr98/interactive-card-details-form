import React, { useState } from "react";
import FormComponent from "./FormComponent";
import BackgroundComponent from "./BackgroundComponent";
import "./App.css";
import Complete from "./CompleteComponent";

function App() {
  const [register, setRegister] = useState(false);

  const [formInput, setFormInput] = useState({
    cardholder: "",
    cardnumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const handleSumbit = (e) => {
    e.preventDefault();

    if (register == false) {
      if (
        formInput.cardholder != "" &&
        formInput.cardnumber.length > 18 &&
        formInput.expMonth.length > 1 &&
        formInput.expYear > 1 &&
        formInput.cvc > 2
      ) {
        setRegister(true);
      }
    } else if (register == true) {
      setRegister(false);
      setFormInput({
        cardholder: "",
        cardnumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
      });
      console.log("hi");
    }
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e);
    let trimmedValue = value.trim();
    if (id === "expMonth" || id === "expYear") {
      trimmedValue = trimmedValue.slice(0, 2);
    }
    if (id === "cvc") {
      trimmedValue = trimmedValue.slice(0, 3);
    }
    setFormInput({
      ...formInput,
      [id]: id != "cardholder" ? trimmedValue : value,
    });
  };
  const handleCardNumberChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    if (value.trim() === "") {
      setFormInput({ ...formInput, [id]: "" });
      return;
    }

    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.match(/.{1,4}/g).join(" ");
    setFormInput({ ...formInput, [id]: formattedValue.slice(0, 19) });
  };
  return (
    <div className="container">
      {register == false ? (
        <FormComponent
          formInput={formInput}
          handleCardNumberChange={handleCardNumberChange}
          setFormInput={setFormInput}
          handleInputChange={handleInputChange}
          handleSumbit={handleSumbit}
        />
      ) : (
        <Complete handleSumbit={handleSumbit} />
      )}

      <BackgroundComponent formInput={formInput} />
    </div>
  );
}

export default App;
