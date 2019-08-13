import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({ areas, hosts, handleSelectHost, selectedHost }) => {

  return (
    <Segment id="map" >
      {areas.map(area => <Area
        key={area.id}
        area={area}
        hosts={hosts}
        handleSelectHost={handleSelectHost}
        selectedHost={selectedHost} />)}
    </Segment>
  )
}

export default WestworldMap
