import './Login.css'
import PeakMale from '../assets/PeakMale.png'
import { useContext } from 'react'
import { UserContext } from '../api/getUserProfile'
import {  Form } from 'react-bootstrap';

export default function Profile() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    // Handle the case when userContext is undefined
    return <div>Loading...</div>;
  }

  const { user } = userContext;

  return (
    <div className='loginDiv' style={{
      backgroundImage: `url(${PeakMale})`,
      backgroundSize: "auto",
      backgroundPosition: "center",
    }}>
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
                
               



            </Form>
    </div>
  );
}
