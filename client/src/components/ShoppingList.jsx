import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = () => {

    const { items } = this.props.item
    // const { items, setItems } = this.children;

    useEffect(() => {
        setItems(getItems())
    }, [])

    return (
        <Container>
            <Button color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={() => {
                    const name = prompt('enter item');
                    if (name) {
                        setItems([...items, { id: uuid(), name: name }])
                    }
                }}
            >
                Add item
            </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ id, name, e }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        setItems(items.filter(item => item.id !== id))
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
};

ShoppingList.propType = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (items) => ({
    item: items
})

export default connect(mapStateToProps, { getItems })(ShoppingList);