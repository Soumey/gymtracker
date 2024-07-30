
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../api/loginUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { getUserProfile, UserContext } from '../api/getUserProfile';

export default function Login() {
    const userContext = useContext(UserContext);
    const navigate=useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    async function handleLoginUser(e: React.FormEvent) {
        e.preventDefault();
        const { email, password } = data;
        try {
            userContext?.setUser(null) // Clear the previous user state
            const responseData = await loginUser({ email, password });
            const { token } = responseData;
            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                localStorage.setItem('token', token); // Store token in localStorage
                const userProfile = await getUserProfile(token);
                userContext!.setUser(userProfile);
                setData({ email: '', password: '' });
                toast.success('Login Successful. Welcome!');
                navigate('/profile');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <div className='loginDiv' >

            <Form style={{ minWidth: 500 }} onSubmit={handleLoginUser}>
                <Form.Group className="mb-5" style={{ minHeight: 200, minWidth: 200 }}>
                    <div className="d-flex justify-content-center text-white">
                        <h1>Gym Tracker logo bratku</h1>
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="login">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={data.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, password: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3 text-white">
                    <div className="d-flex justify-content-between ">
                        <Form.Check type="checkbox" label="Remember me" />
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Forgot password?</Link>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Login</Button>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3 text-white">
                    Don't have an account? <Link to='/register' style={{ textDecoration: 'none', color: 'red' }} >Register</Link>
                </Form.Group>

            </Form>
        </div>
    )
}


