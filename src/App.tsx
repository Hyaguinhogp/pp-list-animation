import Quests from "./components/Quests"
import Tasks from "./components/Tasks"
import Title from "./components/Title"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Title />
      <Tasks />
      <Quests />
    </>
  )
}

export default App
