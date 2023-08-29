import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state= {
    progress:0,
  }
  setProgress = (progress) =>{
    this.setState({progress:progress});
  }
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  //  apiKey = 'b9e5caaac19f409793b0faf5559e9217'
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
                    color='#f11946'
                    height={3}
                    progress={this.state.progress}
                />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="general" key="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="business" key="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="entertainment" key="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="general" key="general"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="health" key="health"/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="science" key="science"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="sports" Key="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="technology" key="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
