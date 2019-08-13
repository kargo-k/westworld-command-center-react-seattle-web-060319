import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'
// import Host from './Host'

const ColdStorage = (props) => {

  return (

    <Segment.Group className="HQComps" >
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>

        <HostList hosts={props.hosts} handleSelectHost={props.handleSelectHost} selectedHost={props.selectedHost} />

      </Segment>
    </Segment.Group >
  )
}

export default ColdStorage
