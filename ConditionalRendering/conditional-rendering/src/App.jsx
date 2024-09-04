// Conditional Rendering allows you to control what gets rendered in your application based on certain conditions
// Something like Show, Hide or Change Component
import UserGreetings from "./UserGreetings"

function App() {

  return (
    <>
     <UserGreetings isLoggedIn = {true}></UserGreetings>
    </>
  )
}

export default App
