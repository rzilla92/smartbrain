import React, { Component } from 'react';
import { Navigation, ImageLinkForm, FaceRecog, Rank } from './Components'
import Clarifai from 'clarifai'
import './App.css'
import ParticlesBg from 'particles-bg'

const app = new Clarifai.App({
  apiKey: '78e17b3477a54fbc8d26aa5f7bed91d0'
 });

const initialState = {
  input: '',
  imageUrl: '',
  box: {}
}

class App extends Component{
  constructor() {
    super()
    this.state = initialState
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
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response =>  this.calculateFaceLocation(response))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <ParticlesBg className="particles" color="#1DB4E0" type="cobweb" bg={true}/>
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}  />
        <FaceRecog />
      </div>
    )
  }
}

export default App
