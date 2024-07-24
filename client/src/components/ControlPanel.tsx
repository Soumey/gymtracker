import React, { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { TCategory, getCategories } from "../api/getCategories";
import { deleteExercise } from "../api/deleteExercise";
import EditPopup from "./EditPopup";
import { createExercise } from "../api/createExercise";


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
        <Container className="mt-4 d-flex justify-content-around text-white flex-column">
            {/*map on categories to show them */}
            {categories.map((category) => (
                <Row className="m-5">
                    <Row>
                        {category.title}
                    </Row>
                    {/*map inside of map for exercises inside of category */}
                    {category.exercises.map((exercise) => (
                        <Container className="pl-2">
                            <Row>
                                {exercise.name} {/*Buttons for delete of exercise */}
                            </Row>
                            <Row>
                                {exercise.description}
                            </Row>
                            <Row>
                                {exercise.link}
                            </Row>
                            <Row>
                                <Button>
                                    Edit
                                </Button>
                                <Button onClick={async () => {
                                    await deleteExercise(category._id, exercise._id);
                                    const updatedCategories = await getCategories();
                                    setCategories(updatedCategories);
                                }}>
                                    Delete
                                </Button>
                            </Row>
                            

                        </Container>
                    ))}
                    <Container className="d-flex flex-column justify-content-center m-width">
                                <Button onClick={() => {
                                    setOpen(true)
                                    setCurrentCategoryId(category._id);
                                }
                                }>
                                    +
                                </Button>
                            </Container>

                    {/*button outside of map to add exercise*/}
                </Row>
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