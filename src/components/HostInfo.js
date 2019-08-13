import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
// [
//   {
//   id: 1,
//   name: "high_plains",
//   limit: 8,
//   auth_req: false
//   },
//   {
//   id: 2,
//   name: "lowlands",
//   limit: 6,
//   auth_req: false
//   },
//   {
//   id: 3,
//   name: "under_construction",
//   limit: 8,
//   auth_req: true
//   },
//   {
//   id: 4,
//   name: "pariah",
//   limit: 14,
//   auth_req: false
//   },
//   {
//   id: 5,
//   name: "python_pass",
//   limit: 14,
//   auth_req: false
//   },
//   {
//   id: 6,
//   name: "badlands",
//   limit: 10,
//   auth_req: false
//   }
//   ]

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
    this.props.updateHostArea(this.props.selectedHost, value)
  }

  toggle = () => {
    this.props.handleActivate(this.props.selectedHost);
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
