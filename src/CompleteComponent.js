import completeicon from "./images/icon-complete.svg";

export default function complete({ handleSumbit }) {
  return (
    <div className="complete">
      <img src={completeicon} />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button
        style={{
          backgroundColor: "hsl(278, 68%, 11%)",
          color: "white",
          cursor: "pointer",
          width: "50%",
        }}
        value="Restart"
        className="restart"
        onClick={handleSumbit}>
        Restart
      </button>
    </div>
  );
}
