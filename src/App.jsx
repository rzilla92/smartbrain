import React, { Component } from 'react'
import Clarifai from 'clarifai';
import { Navigation, ImageLinkForm, FaceRecog, Rank, Signin, Register } from './Components'
import './App.css'
import ParticlesBg from 'particles-bg'

const app = new Clarifai.App({
  apiKey: '78e17b3477a54fbc8d26aa5f7bed91d0'
 });

class App extends Component {
  constructor() {
    super ()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route=== 'signout') {
      this.setState({isSignedIn: false})
    } else if (route==='home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
  const {imageUrl, box , route, isSignedIn} = this.state
   return (
    <div className="App">
      <ParticlesBg className="particles" color="#1DB4E0" type="cobweb" bg={true}/>
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {route === 'home'
      ? <div>
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
          <FaceRecog box={box} imageUrl={imageUrl} />
        </div>
      : (
        route === 'signin'
        ? <Signin onRouteChange={this.onRouteChange} />
        : <Register onRouteChange={this.onRouteChange} />
      )
      }
    </div>
    )
  }
}

export default App
