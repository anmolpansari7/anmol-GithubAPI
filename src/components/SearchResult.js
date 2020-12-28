import React, { useContext, useEffect, useState } from 'react'
import { Image, Container, Card, Button } from 'react-bootstrap'
import { UserContext } from '../UserContext';
import MakeModal from './MakeModal';
import UserList from './UserList';

function SearchResult() {
    const { value, value2 } = useContext(UserContext);
    const [users, setUsers] = value;
    const [userList, setUserList] = value2;
    const [modalShow, setModalShow] = useState(false);
    

    const addUserList = (e) => {
        e.preventDefault();
        const name = e.target.getAttribute("name");
        let found = users.find(function(post, index) {
            if(post.id == name)
                return true;
        });
        
        setUserList(prevUserlist => [ ...prevUserlist, { ...found} ])
        setModalShow(true);
    }

    useEffect(() => {
    }, [users])

    return (
        <Container>
        <div className="d-flex" width="50%">
        <div>
        {users && <h2>Found Repositories..</h2>}
        { users.map(user => (
        <Card className="mt-2 mb-3" key={user.id}>
        <Card.Header>               
        {user.full_name}
        </Card.Header>
        <Card.Body>
        <div className="d-flex justify-content-between">
            <div>
                <Card.Title>
                {user.name}
                </Card.Title>
                <Card.Text>
                {user.description}
                </Card.Text>
                <Card.Subtitle className="text-muted mb-2">
                   created at: {new Date(user.created_at).toLocaleDateString()}
                   <br/>
                   id: {user.id}
                </Card.Subtitle>
            </div>
        <Image className="d-none d-md-block" height="50" roundedCircle src={user.owner.avatar_url} alt="Avatar"/>
        </div>
       
        <Card.Text>
        <Button variant="primary" onClick={addUserList} name={user.id}>
        Add Info
        </Button>
        </Card.Text>
        </Card.Body>
        <MakeModal
        type="User Added"
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </Card>
    )) }
    </div>
    <UserList />
    </div>
    </Container>
    )
}

export default SearchResult
