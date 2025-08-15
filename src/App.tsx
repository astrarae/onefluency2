import './App.css'
import {SparklesPreview} from "@/components/SparklesScreen.tsx";
import { Button } from "@/components/ui/button"

function App() {
  return (
      <menu>
        <SparklesPreview>
            <Button className="mr-4.5">Записаться на курс</Button>
            <Button variant="secondary" className="ml-4.5">Подробнее</Button>
        </SparklesPreview>
      </menu>

  )
}

export default App
