import React from 'react';
import '../stylesheets/Area.css'
import Host from './Host';
import { Card } from 'semantic-ui-react'

const Area = ({ area, hosts, handleSelectHost }) => {

  let areaHosts = hosts.filter(host => (host.area === area.name && host.active) ? host : null)

  return (
    <div className='area' id={area.name}>
      <h3 className='labels'>{area.name.replace(/_/, " ")}</h3>
      <Card.Group itemsPerRow={3}>
        {areaHosts.map(host => <Host host={host} key={host.id} handleSelectHost={handleSelectHost} />)}
      </Card.Group>
    </div>)

}

Area.propTypes = {
  hosts: function (props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
