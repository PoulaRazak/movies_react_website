import AppRouter from './routes'
import './App.css'
import { useEffect} from 'react'
import { useTranslation } from 'react-i18next';


function App() {

  const { i18n } =useTranslation();

  useEffect(()=>{
    document.documentElement.dir= 
    i18n.language === 'en' ? 'ltr' : 'rtl'
  },[i18n.language])
  
  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
