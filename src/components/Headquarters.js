import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel';


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render() {
    return (
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage
            hosts={this.props.hosts}
            handleSelectHost={this.props.handleSelectHost}
            selectedHost={this.props.selectedHost} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={this.props.hosts}
            selectedHost={this.props.selectedHost}
            handleActivate={this.props.handleActivate}
            areas={this.props.areas}
            updateHostArea={this.props.updateHostArea}
            handleSelectHost={this.props.handleSelectHost}
            addLog={this.props.addLog} />
        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel isAllActive={this.props.isAllActive} activateAll={this.props.activateAll} logs={this.props.logs} />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
