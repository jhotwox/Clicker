export const Stats = ({ count, damage, clicks, strength }) => {
  return (
    <div className="main">
      <p>Count: {count}</p>
      <p>Damage: {damage}</p>
      <p>Clicks: {clicks}</p>
      <p>Strength: {strength}</p>
    </div>
  )
}