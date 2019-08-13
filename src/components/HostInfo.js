import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log';

class HostInfo extends Component {
  state = {
    options: [
      { key: 1, text: "High Plains", value: "high_plains" },
      { key: 2, text: "Lowlands", value: "lowlands" },
      { key: 3, text: "Under Construction", value: "under_construction" },
      { key: 4, text: "Pariah", value: "pariah" },
      { key: 5, text: "Python Pass", value: "python_pass" },
      { key: 6, text: "Badlands", value: "badlands" }
    ],
    value: this.props.selectedHost.area
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }

  handleChange = (e, { value }) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    let area = this.props.areas.filter(area => area.name === value)[0]
    let numHosts = this.props.hosts.filter(host => host.area === area.name && host.active).length
    let log

    if (numHosts < area.limit) {
      console.log('inside TRUE of if else')
      debugger
      this.props.updateHostArea(this.props.selectedHost, value)

      log = Log.notify(`${this.props.selectedHost.firstName} set in area ${this.props.selectedHost.area.replace(/_/, " ")}`)
      this.props.addLog(log)
    } else {
      let log = Log.error(`Too many hosts. Cannot add ${this.props.selectedHost.firstName} to ${this.props.selectedHost.area.replace(/_/, " ")}`)
      this.props.addLog(log)
    }
  }

  toggle = () => {
    let area = this.props.areas.filter(area => area.name === this.props.selectedHost.area)[0]
    let numHosts = this.props.hosts.filter(host => host.area === area.name && host.active).length
    let log
    if (numHosts < area.limit) {
      this.props.handleActivate(this.props.selectedHost);

      this.props.selectedHost.active
        ? (log = Log.warn(`Activated ${this.props.selectedHost.firstName}`))
        : (log = Log.notify(`Decommissioned ${this.props.selectedHost.firstName}`))

      this.props.addLog(log)

    } else {

      let log = Log.error(`Too many hosts. Cannot add ${this.props.selectedHost.firstName} to ${this.props.selectedHost.area.replace(/_/, " ")}`)
      this.props.addLog(log)
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.selectedHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.selectedHost.firstName} | {this.props.selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.selectedHost.active ? "Active" : "Decommissioned"}
                  /* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */
                  checked={this.props.selectedHost.active}
                  /* Checked takes a boolean and determines what position the switch is in. Should it always be true? */
                  slider
                />
              </Card.Meta>
              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.selectedHost.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo