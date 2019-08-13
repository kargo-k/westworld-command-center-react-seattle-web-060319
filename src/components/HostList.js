import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return (
    <Card.Group itemsPerRow={9}>
      {props.hosts.map(host => !host.active ? <Host host={host} key={host.id} handleSelectHost={props.handleSelectHost} selectedHost={props.selectedHost} /> : null)}
    </Card.Group>
  )
}

export default HostList
