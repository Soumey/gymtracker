import './Login.css'
import PeakMale from '../assets/PeakMale.png'
import { useContext, useState } from 'react'
import { UserContext } from '../api/getUserProfile'
import { Button, Form } from 'react-bootstrap';
import EditPopup from './EditPopup'
export default function Profile() {
  const userContext = useContext(UserContext);
  const [open, setOpen]= useState<boolean>(false);
  if (!userContext) {
    // Handle the case when userContext is undefined
    return <div>Loading...</div>;
  }

  const { user } = userContext;
  return (
    <div className='loginDiv' 
    >
      <Form style={{ minWidth: 500 }} >
        <Form.Group className="mb-5" style={{ minHeight: 200, minWidth: 200 }}>
          <div className="d-flex justify-content-center text-secondary">
            <h1>User Info</h1>
          </div>

        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className='text-secondary'>
            {user?.email}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className='text-secondary'>
            {user?.username}
          </Form.Label>

        </Form.Group>
        <Form.Group>
          <Button onClick={()=>setOpen(true)}>Edit</Button>
        </Form.Group>
        <EditPopup open={open} onClose={()=>setOpen(false)}>
          <p> jakis tekst bratku</p>
        </EditPopup>





      </Form>
    </div>
  );
}
