import React, { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { TCategory, getCategories } from "../api/getCategories";
import { deleteExercise } from "../api/deleteExercise";
import EditPopup from "./EditPopup";
import { createExercise } from "../api/createExercise";
import './ControlPanel.css'

export default function ControlPanel() {

    const [categories, setCategories] = useState<TCategory[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [open, setOpen] = useState<boolean>(false);
    const [currentCategoryId, setCurrentCategoryId] = useState("");

    useEffect(() => {
        async function fetchCategories() {
            const newCategories = await getCategories();
            setCategories(newCategories);
        }
        fetchCategories();
    }, []);

    const handleAddExercise = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentCategoryId) {
            await createExercise(currentCategoryId, name, description, link);
            const updatedCategories = await getCategories();
            setCategories(updatedCategories);
            setOpen(false);
            setName("");
            setDescription("");
            setLink("");
        }
    };


    return (
        <Container className="mt-4 d-flex justify-content-center text-white flex-column">
            {/*map on categories to show them */}
            {/*
<Card>
    <Card.Body>
    <Card.Title className='categoryTitle'>{category.name}</Card.Title>
    <Card.Text>{exercise.description}</Card.Text>
     <Card.Link href={exercise.link.startsWith('http') ? exercise.link : `http://${exercise.link}`}>Video Example</Card.Link>
     <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteExercise(categoryId!,exercise._id)}>X</Button>
    </Card.Body>
</Card>*/}
            {categories.map((category) => (
                <Card className="m-5 category-card" key={category._id}>
                    <Card.Title>
                        {category.title}
                    </Card.Title>
                    {/*map inside of map for exercises inside of category */}
                    {category.exercises.map((exercise) => (
                        <Card.Body className="border border-3 rounded mb-3 border-secondary  mask-hover mb-1 bg-secondary" style={{backgroundColor:" #808080"}}>
                            <Row>
                                <Card.Text>{exercise.name}</Card.Text>
                                <Container className="d-flex justify-content-end">
                                    <Button className="mr-2">
                                        Edit
                                    </Button>
                                    <Button onClick={async () => {
                                        await deleteExercise(category._id, exercise._id);
                                        const updatedCategories = await getCategories();
                                        setCategories(updatedCategories);
                                    }}>
                                        Delete
                                    </Button>
                                </Container>
                            </Row>

                            <Card.Link href={exercise.link.startsWith('http') ? exercise.link : `http://${exercise.link}`}>Video Example</Card.Link>
                        </Card.Body>
                    ))}

                    <Container className="d-flex justify-content-center">
                        <Button
                            variant="primary" size="sm" className='rounded-circle d-flex justify-content-center text-white'
                            onClick={() => {
                                setOpen(true)
                                setCurrentCategoryId(category._id);
                            }}
                        >
                            +
                        </Button>
                    </Container>
                </Card>
            ))}
            <EditPopup open={open} onClose={() => setOpen(false)}>
                <Container className="bg-black">
                    <Form className='mt-5' onSubmit={handleAddExercise}>
                        <Form.Group className="mb-3" controlId="exerciseName">
                            <Form.Label className='text-white'>Exercise name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exerciseDesc">
                            <Form.Label className='text-white'>Exercise description</Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exerciseLink">
                            <Form.Label className='text-white'>Video example link</Form.Label>
                            <Form.Control
                                type="text"
                                value={link}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-5'>Create</Button>
                    </Form>
                </Container>
            </EditPopup>
        </Container>
    )
}

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

// <Card className="category-card">
//       <Card.Body>
//         <Card.Title className='categoryTitle'>{exercise.name}</Card.Title>
//         <Card.Text>{exercise.description}</Card.Text>
//         <Card.Link href={exercise.link.startsWith('http') ? exercise.link : `http://${exercise.link}`}>Video Example</Card.Link>
//         <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteExercise(categoryId!,exercise._id)}>X</Button>
//       </Card.Body>
//     </Card>

