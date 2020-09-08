import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = {
    lat: null,
    err: ""
  };
  // use the web browser geolocation api to get the latitude
  componentDidMount() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        error => this.setState({err: error.message})
      );
    }
  }

  renderContent() {
    if(this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if(this.state.err) {
      return this.state.err;
    }
    return <Loader message="Trying to locate the latitude..."/>;
  }

  render() {
    return(
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

