import '../App.css'

export const ButtonBar = ({ activeTab, setActiveTab, name }) => {
  return (
    <div
      className="no-select"
      onClick={() => setActiveTab(name)}
      style={{
        padding: "10px",
        borderBottom: activeTab === name ? "2px solid red" : "none",
        // border: "2px solid black",
        
      }}
    >
      {name}
    </div>
  )
}