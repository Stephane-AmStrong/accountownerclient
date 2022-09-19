import './Home.css';
import { Col, Row } from 'react-bootstrap';

export default function Home(props) {
    return (
        <Row>
            <Col md={12}>
                <div className={'homeText'}>
                    "WELCOME TO ACCOUNT-OWNER APPLICATION"
                </div>
            </Col>
        </Row>
    )
}