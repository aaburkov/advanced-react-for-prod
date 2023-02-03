import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import cn from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'



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
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    </div>
  )
}
