
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PeakMale from '../assets/PeakMale.png'
import './Login.css'

export default function Login() {
    return (
        <div className='loginDiv' style={{backgroundImage:`url(${PeakMale})`,backgroundSize: "auto",
        backgroundPosition: "center",}}>


            <Form style={{ minWidth: 500 }}>
                <Form.Group className="mb-5" style={{minHeight:200,minWidth:200}}>
                    <div className="d-flex justify-content-center text-secondary">
                        <h1>Gym Tracker logo bratku</h1>
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                        type="text"
                        placeholder="Enter nickname"
                    //value={description}
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                    //value={description}
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                    //value={youtubeLink}
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                    //value={youtubeLink}
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 text-secondary">
                    <div className="d-flex justify-content-between ">
                        <Form.Check type="checkbox" label="Rules czaisz baze?" />
                        
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className="d-flex justify-content-end">
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><Button variant="primary" type="submit">Create Account</Button></Link>
                    </div>
                </Form.Group>

               

            </Form>
        </div>
    )
}


