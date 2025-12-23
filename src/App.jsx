/**************
    IMPORT 
***************/
import './App.css'

// Pagine principali
import FilmsPage from './pages/FilmsPage'                 
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import MyListPage from './pages/MyListPage'
import NewsPopularsPage from './pages/NewsPopularsPage'
import ProfilePage from './pages/ProfilePage'
import SerieTvPage from './pages/SerieTvPage'

// Routing e layouts
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import OnboardingLayout from './layouts/OnboardingLayout'

function App() {

  return (

    <BrowserRouter>
      <Routes>

        {/* Layout di ingresso all'app (landing page e profilo utente) */}
        <Route element={<OnboardingLayout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/profiles" element={<ProfilePage />} />
        </Route>

        {/* Layout principale dell'app */}
        <Route element={<AppLayout/>}>
          <Route path="/home" element={<HomePage/>} />
          <Route path = "/films" element={<FilmsPage/>}/>
          <Route path="/series" element={<SerieTvPage />} />
          <Route path="/news-populars" element={<NewsPopularsPage />} />
          <Route path="/my-list" element={<MyListPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App;
