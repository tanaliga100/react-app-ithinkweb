import React, {useState} from 'react'
import './Home.css'
import { Jumbotron } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Home = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="container mt-5">
            <Jumbotron>
                <h1 className="display-3">Hello, Im Jordan!</h1>
                <p className="lead">Front-End Developer</p>
                <hr className="my-2" />
                <div>
                <p>jordantanaliga@outlook.com</p>
                <p>jordantanaliga@gmail.com</p>
                </div>
                <p className="lead">
                <Button color="warning" onClick={toggle}> See Note</Button>{' '}
                </p>
            </Jumbotron>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Side Notes</ModalHeader>
                <ModalBody>
                    <h3> The data is not persisted so the data wont be edited but the logic is in there..</h3>
                    <ul>
                        <li>It can add the user</li>
                        <li>It can be edited but not persistent. You can see the updated users in the console</li>
                        <li>It can be deleted but not persistent because it takes from a public API</li>
                        <li>I used the react-router to simulate the links</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Home
