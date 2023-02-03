import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/Main/Main.async'
import { AboutPageAsync } from './pages/About/About.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import cn from './helpers/classNames'



export default function App() {
   const {theme, toggleTheme} = useTheme()

   return (
    <div className={cn('app', theme)}>
        <button onClick={toggleTheme}>
            <h2>TOGGLE THEME</h2>
        </button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>

        <Suspense fallback={<div>LOADING...</div>}>
            <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
  )
}
