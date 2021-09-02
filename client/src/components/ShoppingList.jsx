import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const ShoppingList = () => {

    const [item, setItem] = useState([{ id: uuid(), name: 'Butter' }])

    return (
        <Container>
            <Button color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={() => {
                    const name = prompt('enter item');
                    if (name) {
                        setItem([...item, { id: uuid(), name: name }])
                    }
                }}
            >
                Add item
            </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {item.map(({ id, name, e }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        setItem(item.filter(item => item.id !== id))
                                    }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList