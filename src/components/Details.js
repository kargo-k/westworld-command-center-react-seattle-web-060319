import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo';


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => props.selectedHost
    ?
    (<HostInfo selectedHost={props.selectedHost} handleActivate={props.handleActivate} areas={props.areas} updateHostArea={props.updateHostArea} hosts={props.hosts} />)
    :
    (<Image size='medium' src={Images.westworldLogo} />)

  return (
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
