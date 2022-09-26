import { Navigation, ImageLinkForm, FaceRecog, Rank } from './Components'
import './App.css'
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <ParticlesBg className="particles" color="#1DB4E0" type="cobweb" bg={true}/>
      <Navigation />
      <Rank />
      <ImageLinkForm />
      <FaceRecog />
    </div>
  )
}

export default App
