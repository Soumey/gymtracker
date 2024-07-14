
import { Button, Form } from 'react-bootstrap';
import PeakMale from '../assets/PeakMale.png'
import './Login.css'
import { useState } from 'react';
import { createAccount } from '../api/createAccount';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassowrd: ''

    });
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    // async function handleCreateCategory(e: React.FormEvent) {
    //     e.preventDefault();
    //     const category = await createCategory({ title, img });
    //     setCategories([...categories, category]);
    //     setTitle("");
    //     setImg("");
    // }
    async function handleCreateAccount(e: React.FormEvent) {
        e.preventDefault();
        const { username, email, password, confirmPassowrd } = data;

        if (!isCheckboxChecked) {
            toast.error('You must agree to the rules.');
            return;
        }

        if (password !== confirmPassowrd) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const responseData = await createAccount({ username, email, password });

            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({
                    username: "",
                    email: '',
                    password: '',
                    confirmPassowrd: ''
                });
                setIsCheckboxChecked(false);
                toast.success('Register Successful. Welcome!');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred. Please try again.');
        }
    }

    return (
        <div className='loginDiv' style={{
            backgroundImage: `url(${PeakMale})`, backgroundSize: "auto",
            backgroundPosition: "center",
        }}>


            <Form style={{ minWidth: 500 }} onSubmit={handleCreateAccount}>
                <Form.Group className="mb-5" style={{ minHeight: 200, minWidth: 200 }}>
                    <div className="d-flex justify-content-center text-secondary">
                        <h1>Gym Tracker logo bratku</h1>
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                        type="text"
                        placeholder="Enter nickname"
                        value={data.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, username: e.target.value })}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
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
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={data.confirmPassowrd}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, confirmPassowrd: e.target.value })}
                    //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 text-secondary">
                    <div className="d-flex justify-content-between ">
                        <Form.Check type="checkbox" label="Rules czaisz baze?" checked={isCheckboxChecked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsCheckboxChecked(e.target.checked)}/>

                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Create Account</Button>
                    </div>
                </Form.Group>



            </Form>
        </div>
    )
}


