import "../App.css"

export const LifeBar = ({ life, level, damaged }) => {
  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        Level {level}
      </div>
      {/* lifebar Container */}
      <div className="lifebar-container" style={{ border: `2px solid ${damaged ? "#F00" : "#FFF"}` }}>
        {/* lifebar */}
        <div
          className="lifebar"
          style={{
            width: `${life / Math.pow(10, level - 2)}%`,
            height: "100%",
            backgroundColor: "#FFF",
            // backgroundColor:
            //   life / Math.pow(10, level - 2) > 50
            //     ? "#0F0"
            //     : life / Math.pow(10, level - 2) > 20
            //     ? "#FF0"
            //     : "#F00",
            // borderRadius: "8px 0 0 8px",
            transition: "width 0.5s ease",
            // display: "flex",
          }}
        >
          {/* Life */}
          <div
            className="lifebar-text"
            style={{ color: damaged ? "#F00" : "#000" }}
          >
            {life}
          </div>
        </div>
      </div>
    </div>
  )
}
