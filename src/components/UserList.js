import React ,{ useContext, useEffect, useState } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import { UserContext } from '../UserContext';
import MakeModal from "./MakeModal";

function UserList() {
    const { value, value2 } = useContext(UserContext);
    const [userList, setUserList] = value2;
    const [users, setUsers] = value;
    const [modalShow, setModalShow] = useState(false);

    const deleteUserList = (e) => {
        e.preventDefault();
        const name = e.target.getAttribute("name");
        setUserList(userList.filter(repo => repo.id != name));
        setModalShow(true);
    }
    
    useEffect(() => {
    }, [userList])


    return (
        <div>
        <Card className="mt-5 ml-3" style={{ width: '18rem' }}>
        <Card.Header>Saved List</Card.Header>
        <ListGroup variant="flush">
        { userList.map(repo => (
            <ListGroup.Item className="d-flex justify-content-between" key={repo.id}>
            <p>
            {repo.full_name}
            </p>
            <Button variant="light" onClick={deleteUserList} name={repo.id}>Delete</Button>
            </ListGroup.Item>
           
        ))
        }
        </ListGroup>
        </Card>
        <MakeModal
        type="User Deleted"
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    )
}

export default UserList
