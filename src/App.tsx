import { Habit } from './components/habit'
import './styles/global.css'

function App() {

  return (
    <div>
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
      <Habit completed={50} />
      <Habit completed={60} />
      <Habit completed={70} />
    </div>
  )
}

export default App
