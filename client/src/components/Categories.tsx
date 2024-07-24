import React, { useState, useEffect } from 'react';
import './card.css';
import { Form, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { createCategory } from '../api/createCategory';
import { getCategories, TCategory } from '../api/getCategories';
import { deleteCategory } from '../api/deleteCategory';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../api/getUserProfile';

export default function Categories() {
    const userContext = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState<string>("");
    const [categories, setCategories] = useState<TCategory[]>([]);
    const navigate=useNavigate();
    async function handleCreateCategory(e: React.FormEvent) {
        e.preventDefault();
        const category = await createCategory({ title, img });
        setCategories([...categories, category]);
        setTitle("");
        setImg("");
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImg(reader.result as string);
            };
            reader.onerror = (error) => {
                console.error('Error converting image to Base64:', error);
            };
        }
    };

    useEffect(() => {
        async function fetchCategories() {
            const newCategories = await getCategories();
            setCategories(newCategories);
        }
        fetchCategories();
    }, []);

    async function handleDeleteCategory(categoryId: string) {
        await deleteCategory(categoryId);
        setCategories(categories.filter(category => category._id !== categoryId));
    }

    return (
        <Container fluid style={{ backgroundColor: 'rgb(43, 43, 44)', padding: '20px' }}>
            <Row>
                {categories.map((category) => (
                    <Col xs={12} sm={6} md={4} key={category._id} className="d-flex mt-3">
                        <ListGroup.Item className="w-100">
                            <Card className="category-card" >
                                <Card.Img variant="top" src={category.img} className="category-card-img" />
                                <Card.Body className="category-card-body">
                                    <Card.Title className='categoryTitle' as={Link} to={`/categories/${category._id}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {category.title}
                                    </Card.Title>
                                    <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteCategory(category._id)}>X</Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </Col>
                ))}
            </Row>
            
            {/* {userContext?.user && (
                
                <Form  className='mt-5'onSubmit={handleCreateCategory}>
                    <Form.Group className="mb-3" controlId="categoryTitle">
                        <Form.Label className='text-white'>Category Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="categoryImage">
                        <Form.Label className='text-white'>Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={handleFileChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mb-5'>Create</Button>
                </Form>
                
            )} */}
        </Container>
    );
}