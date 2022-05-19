import './App.css'
import 'antd/dist/antd.min.css'
import { useEffect } from 'react'
import { MainLayout } from './components/ui/MainLayout'
import { IconService } from './services/Icons/IconsService'
import { useAppDispatch } from './store'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    IconService.getIcons(dispatch)
  }, [])

  // TODO check for mobile width
  return (
    <div className='App'>
      <MainLayout />
    </div>
  )
}

export default App
