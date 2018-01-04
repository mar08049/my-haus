import React from 'react';
import { Card, CardTitle, CardText,
 CardSubtitle, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ListingCard({ listing, deleteButton }) {
  return (
    <Card key={ listing.id }>
        <CardBody>
            <CardTitle>{ listing.title }</CardTitle>
            <CardText>{ listing.description }</CardText>
            <CardText>{ listing.price }</CardText>
            <CardText>{ listing.location }</CardText>
            <CardSubtitle>Presented by:</CardSubtitle>
            <CardText>{ listing.agent_name }</CardText>
            <CardText>{ listing.agent_number }</CardText>
            <CardText>{ listing.agent_email }</CardText>
            <Button
                color="danger"
                size="sm"
                style={{ float: "right" }}
                onClick={() => deleteButton(listing.id) }>
            Delete
            </Button>
            <Button
                color="warning"
                size="sm"
                style={{
                    float: "right"
                }}  >
                <Link
                    to={{
                        pathname: `/listings/${ listing.id }/edit`,
                        state: { listing: listing }
                    }} >
                    Edit
                </Link>
            </Button>
        </CardBody>
    </Card>
  )
};
