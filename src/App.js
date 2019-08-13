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
      selectedHost: false,
      isAllActive: false
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

  handleSelectHost = host => {
    this.setState({ selectedHost: host })
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

  activateAll = () => {
    console.log('inside activate all')
    this.setState(prevState => {
      let isActive = !prevState.isAllActive
      let updateHosts = [...prevState.hosts]
      updateHosts = updateHosts.map(host => {
        host.active = isActive
        return host
      })
      return { hosts: updateHosts, isAllActive: isActive }
    })
  }

  render() {
    return (
      <Segment id='app'>
        <WestworldMap
          areas={this.state.areas}
          hosts={this.state.hosts}
          handleSelectHost={this.handleSelectHost}
          selectedHost={this.state.selectedHost} />
        <Headquarters
          hosts={this.state.hosts}
          selectedHost={this.state.selectedHost}
          handleActivate={this.handleActivate}
          areas={this.state.areas}
          updateHostArea={this.updateHostArea}
          handleSelectHost={this.handleSelectHost}
          activateAll={this.activateAll}
          isAllActive={this.state.isAllActive} />
      </Segment>
    )
  }
}

export default App;
