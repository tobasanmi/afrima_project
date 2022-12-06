import React from 'react'
import Modal, {closeStyle} from "simple-react-modal"
import { useState } from 'react'



export default function ContactFormModalFailure() {

const [state, setState] = useState();

const showModal = () => {
    setState({show:true})    
}

const closeModal = () => {
    setState ({show:false})
}


  return (
    <div>
     <Modal
      className="test-class" //this will completely overwrite the default css completely
      style={{background: 'red'}} //overwrites the default background
      containerStyle={{background: 'blue'}} //changes styling on the inner content area
      containerClassName="test"
      closeOnOuterClick={true}
        >
 
      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <div>failure</div>

      </Modal>

    </div>
  )
}
