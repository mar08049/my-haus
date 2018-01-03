import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const ListingFormTemplate = ({ listing, handleOnChange, handleOnSubmit, buttonText }) => (
    <Form onSubmit={ handleOnSubmit }>
        <FormGroup row>
            <Label for="title" sm={2}>Title:</Label>
            <Col sm={10}>
                <Input
                    onChange={ handleOnChange }
                    type="text"
                    name="title"
                    defaultValue={ listing.title }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="description" sm={2}>Description:</Label>
            <Col sm={10}>
                <Input
                    onChange={ handleOnChange }
                    type="textarea"
                    name="description"
                    defaultValue={ listing.description }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="location" sm={2}>Location:</Label>
            <Col sm={10}>
                <Input
                    onChange={ handleOnChange }
                    type="textarea"
                    name="location"
                    defaultValue={ listing.location }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="price" sm={2}>Price per Night:</Label>
            <Col sm={10}>
                <Input
                    onChange={ handleOnChange }
                    type="textarea"
                    name="price"
                    defaultValue={ listing.price }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="availability" sm={2}>Available:</Label>
            <Col sm={10}>
                <Input
                    onChange={ handleOnChange }
                    type="textarea"
                    name="availability"
                    defaultValue={ listing.availability }
                />
            </Col>
        </FormGroup>

        <Button type="submit">{buttonText}</Button>
    </Form>
);
