import bgCardBack from "./images/bg-card-back.png";
import bgCardFront from "./images/bg-card-front.png";
import bgMainDesktop from "./images/bg-main-desktop.png";

export default function BackgroundComponent({ formInput }) {
  const { cardholder, cardnumber, expMonth, expYear, cvc } = formInput;

  return (
    <div className="bg-color">
      <div className="card">
        <div className="front">
          <img src={bgCardFront} alt="" />

          <span className="card-number">
            {cardnumber == "" ? "1234 5678 9123 0000" : cardnumber}
          </span>
          <span className="name">
            {cardholder == "" ? "JANE APPLESEED" : cardholder}
          </span>
          <span className="exp">
            {expMonth == "" ? "MM" : expMonth}/{expYear == "" ? "YY" : expYear}
          </span>
        </div>
        <div className="back">
          <img src={bgCardBack} alt="" />
          <span className="cvc">{cvc == "" ? "123" : cvc}</span>
        </div>
      </div>
      <img className="background" src={bgMainDesktop} alt="" />
    </div>
  );
}
