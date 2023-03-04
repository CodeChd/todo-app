
export default function Header() {
  return (
    <header>
            <h1>TODO LIST</h1>
            <form >
                <input type="text" />
                <button className="btn-header"> +</button>
                <select className="options">
                    <option value="All">All</option>
                    <option value="Complete">Complete</option>
                    <option value="Current">Current</option>
                </select>
            </form>
    </header>
  )
}
