import { MobileNavigation } from './components/Navigation/MobileNavigation'
import { Sidebar } from './components/Sidebar/Sidebar'
import { About } from './sections/About/About'
import { Contact } from './sections/Contact/Contact'
import { Experience } from './sections/Experience/Experience'
import { Hero } from './sections/Hero/Hero'
import { Journey } from './sections/Journey/Journey'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'
import { navigation } from './data/navigation'
import './App.css'

const sectionIds = navigation.map((item) => item.id)

function App() {
  const activeSection = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <MobileNavigation activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      <div className="site-shell">
        <main id="main-content" className="main-content">
          <Hero />
          <About />
          <Experience />
          <Journey />
          <Contact />
        </main>
        <div className="sidebar-track">
          <Sidebar activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
        </div>
      </div>
    </>
  )
}

export default App
