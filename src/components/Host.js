import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return (
    // assigns the "selected" class name to the Card component if the card is the selected host's card
    // onClick makes the selected card the selected host up in App's state
    <Card
      className={props.selectedHost === props.host ? "host selected" : "host"}
      onClick={(e) => {
        props.handleSelectHost(props.host)
      }}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
