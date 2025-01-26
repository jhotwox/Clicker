import { LifeBar } from "../components"

export const Home = ({ handleTargetClick, boss, life, level, damaged }) => {
  return (
    <div>
      <button style={{ border: "none", background: "none" }}>
        <img
          src={boss}
          className={`boss ${damaged ? "damaged" : ""}`}
          alt="Boss"
          onClick={handleTargetClick}
          draggable="false"
        />
      </button>
      <LifeBar life={life} level={level} damaged={damaged} />
    </div>
  )
}
