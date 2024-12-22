import CompanySection from './components/CompanySection'
import FloatingMenu from './components/FloatingMenu'
import {FooterSection} from './components/FooterSection'
import { HeaderSection } from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import ProjectDoc from './components/ProjectDoc'
import Solutions from './components/Solutions'

function App() {
  return (
    <div>
      <HeaderSection />

      <HeroSection />
      <CompanySection />
      <ProjectDoc />
      <Solutions />
      <FooterSection />

      <FloatingMenu />
    </div>
  )
}

export default App
