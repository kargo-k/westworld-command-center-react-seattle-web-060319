import React from 'react';
import '../stylesheets/Area.css'
import Host from './Host';
import { Card } from 'semantic-ui-react'

const Area = ({ area, hosts, handleSelectHost, selectedHost }) => {

  // finds all of the hosts that are active in that area
  let areaHosts = hosts.filter(host => (host.area === area.name && host.active) ? host : null)

  return (
    <div className='area' id={area.name}>
      <h3 className='labels'>{area.name.replace(/_/, " ")}</h3>
      <Card.Group itemsPerRow={3}>
        {areaHosts.map(host => <Host host={host} key={host.id} handleSelectHost={handleSelectHost} selectedHost={selectedHost} />)}
      </Card.Group>
    </div>)

}

export default Area;
