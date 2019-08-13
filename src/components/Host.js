import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return (
    <Card
      className={props.selectedHost == props.host ? "host selected" : "host"}
      onClick={(e) => {
        // FIXME: styling for selected host to remove selected class after selection of a different host
        // e.target.parentNode.classList.value += ' selected'
        props.handleSelectHost(props.host)
      }}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
