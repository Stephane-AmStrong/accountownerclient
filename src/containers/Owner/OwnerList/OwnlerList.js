import { Table, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions'
import Owner from "../../../components/OwnerComponents/Owner/Owner";
import { useEffect } from "react";


/*
export default function OwnerList(props) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
*/




function OwnerList(props) {

    useEffect(() => {
        let url = '/api/owner';
        props.onGetData(url, { ...props });
    }, [])

    let owners = [];
    if (props.data && props.data.length > 0) {
        owners = props.data.map((owner) => {
            return (
                <Owner key={owner.id} owner={owner} {...props} />
            )
        })
    }
    return (
        <>
            <Row>
                <Col md={{ span: 4, offset: 10 }}>
                    <Link to='/createOwner' >Create Owner</Link>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={12}>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>Address</th>
                                <th>Details</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {owners}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.repository.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerList);