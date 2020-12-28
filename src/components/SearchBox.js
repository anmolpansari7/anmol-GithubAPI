import { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import useSearchbox from '../useSearchbox';

function SearchBox() {
    const [query,setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    useSearchbox(query);

    return (
        <Form className="mt-4">
        <Form.Row>
            <Form.Group as={Col}>
            <Form.Label>Search for User</Form.Label>
            <Form.Control onChange={handleSearch} name="description" type="text" />
            </Form.Group>
        </Form.Row>
        </Form>
    )
}

export default SearchBox
