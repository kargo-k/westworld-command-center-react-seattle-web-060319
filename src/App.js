import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'
const hostAPI = 'http://localhost:3000/hosts'
const areaAPI = 'http://localhost:3000/areas'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hosts: [],
      areas: [],
    }
  }

  componentDidMount() {
    fetch(hostAPI)
      .then(res => res.json())
      .then(hosts => this.setState({ hosts }))
    fetch(areaAPI)
      .then(res => res.json())
      .then(areas => this.setState({ areas }))
  }

  handleActivate = selectedHost => {
    selectedHost.active = !selectedHost.active
    this.setState(prevState => {
      let updatedHosts = prevState.hosts.map(host => {
        if (host.id === selectedHost.id) {
          return selectedHost
        } else {
          return host
        }
      })
      return { selectedHost: selectedHost, hosts: updatedHosts }
    })
  }

  updateHostArea = (selectedHost, value) => {
    selectedHost.area = value
    this.setState(prevState => {
      let updatedHosts = prevState.hosts.map(host => {
        if (host.id === selectedHost.id) {
          return selectedHost
        } else {
          return host
        }
      })
      return { selectedHost: selectedHost, hosts: updatedHosts }
    })
  }

  render() {
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} handleActivate={this.handleActivate} areas={this.state.areas} updateHostArea={this.updateHostArea} />
      </Segment>
    )
  }
}

export default App;
