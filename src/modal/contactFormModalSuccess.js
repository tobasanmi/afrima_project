    
  import Modal from 'react-bootstrap/Modal';


   
    export default function ContactFormModalSuccess({modalStatus, response}) {
      // const [show, setShow] = useState(true);
      // modalStatus = true
    
      // const handleClose = () => setShow(false);
      // const handleShow = () => setShow(true);
    
      return (
    <>
          {/* <Modal show={show} onHide={handleClose}> */}
          <Modal show={modalStatus}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{response}</Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </>
      );
    }
