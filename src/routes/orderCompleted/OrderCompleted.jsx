function OrderCompleted() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "start",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      <div style={{position: "relative", top: "5px"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <circle cx="12" cy="12" r="10" fill="green" />
          <text x="8" y="16" fill="white" fontSize="16" fontWeight="bold">
            ✓
          </text>
        </svg>
      </div>
      <div>
        <p style={{marginTop: "0"}}>
        Thank You for using CrownClothing, You will recieve the order within 2
        weeks.
        </p>
        <p style={{marginTop: "0"}}>For more details, Contact Us and our Customer Service will respond instantly.</p>
      </div>
    </div>
  );
}

export default OrderCompleted;
