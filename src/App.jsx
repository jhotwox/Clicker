import { useState, useEffect } from "react"
import "./App.css"
import { Home, Shop, Stats, Settings } from "./pages"
import { ButtonBar } from "./components"
import boss from "/Mac-Miller.png"

function App() {
  // ["Home", "Shop", "Stats", "Settings"]
  const [activeTab, setActiveTab] = useState("Home")

  const [count, setCount] = useState(0)
  const [points, setPoints] = useState(0)
  const [damage, setDamage] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [strength, setStrength] = useState(1)
  const [life, setLife] = useState(10)
  const [level, setLevel] = useState(1)
  const [damaged, setDamaged] = useState(false)

  useEffect(() => {
    setDamaged(true)
    // Wait 200ms to remove damage effect
    setTimeout(() => {
      setDamaged(false)
    }, 200)
  }, [life])

  const handleTargetClick = () => {
    setPoints((points) => points + strength)
    setDamage((damage) => damage + strength)
    setClicks((clicks) => clicks + 1)
    updateLife()
    console.log(points)
  }

  const updateLife = () => {
    setLife((life) => (life - strength > 0 ? life - strength : 0))
    if (life <= 1) {
      setLevel((level) => level + 1)
      // if level = 1 then life = 10, if level = 2 then life = 100, if level = 3 then life = 1000, etc.
      setLife((life) => Math.pow(10, level + 1))
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <Home
            handleTargetClick={handleTargetClick}
            boss={boss}
            life={life}
            level={level}
            damaged={damaged}
          />
        )
      case "Shop":
        return <Shop />
      case "Stats":
        return (
          <Stats
            count={count}
            damage={damage}
            clicks={clicks}
            strength={strength}
          />
        )
      case "Settings":
        return <Settings />
      default:
        return null
    }
  }

  return (
    <div>
      {/* Button Bar */}
      <div>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <ButtonBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Home"
          />
          <ButtonBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Shop"
          />
          <ButtonBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Stats"
          />
          <ButtonBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Settings"
          />
        </div>
        <div style={{ marginTop: "20px" }}>{renderContent()}</div>
        {/* <LifeBar life={life} level={level} /> */}
      </div>
    </div>
  )
}

export default App
