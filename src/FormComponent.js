export default function Form({
  formInput,
  setFormInput,
  handleInputChange,
  handleSumbit,
  handleSubmitform,
  handleCardNumberChange,
}) {
  return (
    <div className="form">
      <form action="" onSubmit={handleSumbit}>
        <label htmlFor="cardholder">CARDHOLDER NAME</label>
        <input
          type="text"
          id="cardholder"
          placeholder="e.g. JANE APPLESEED"
          value={formInput.cardholder}
          onChange={handleInputChange}
        />
        <label htmlFor="cardnumber">CARD NUMBER</label>
        <input
          type="text"
          id="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formInput.cardnumber}
          onChange={handleCardNumberChange}
        />

        <div className="data">
          <div>
            <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
            <div>
              <input
                type="number"
                id="expMonth"
                style={{
                  width: "45%",
                  marginTop: "15px",
                  marginRight: "5px",
                }}
                placeholder="MM"
                value={formInput.expMonth}
                onChange={handleInputChange}
              />
              <input
                type="number"
                id="expYear"
                style={{ width: "45%", marginTop: "15px" }}
                placeholder="YY"
                value={formInput.expYear}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <div>
              <input
                type="number"
                id="cvc"
                style={{ marginTop: "15px", width: "100%" }}
                placeholder="e.g. 123"
                value={formInput.cvc}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          style={{
            backgroundColor: "hsl(278, 68%, 11%)",
            color: "white",
            cursor: "pointer",
          }}
          value="Confirm"
          onSubmit={handleSumbit}
        />
      </form>
    </div>
  );
}
