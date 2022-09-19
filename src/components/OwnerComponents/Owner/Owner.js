import React from "react";
import Moment from "react-moment";
import Button from 'react-bootstrap/Button';

const redirectToOwnerDetails = (id, history) => {
    history.push('/ownerDetails/' + id);
}
const redirectToUpdateOwner = (id, history) => {
    history.push('/updateOwner/' + id);
}
const rediterctToDeleteOwner = (id, history) => {
    history.push('/deleteOwner/' + id);
}


export default function Owner(props) {
    return (
        <>
            <tr>
                <td>{props.owner.name}</td>
                <td><Moment format="DD/MM/YYYY">{props.owner.dateOfBirth}</Moment></td>
                <td>{props.owner.address}</td>
                <td>
                    <Button variant="info" onClick={() => redirectToOwnerDetails(props.owner.id, props.history)}>Details</Button>
                </td>
                <td>
                    <Button variant="success" onClick={() => redirectToUpdateOwner(props.owner.id, props.history)}>Update</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => rediterctToDeleteOwner(props.owner.id, props.history)}>Delete</Button>
                </td>
            </tr>
        </>
    )
}