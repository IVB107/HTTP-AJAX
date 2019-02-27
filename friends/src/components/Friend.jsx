import React from 'react';
import styled from 'styled-components';

const FriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid black;
    background-color: lightblue;
    width: 300px;
`;

const Friend = props => {
    const { id, name, age, email } = props.friend;
    return (
        <FriendContainer id={id}>
            <h2>{name}</h2>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Email: </strong>{email}</p>
        </FriendContainer>
    )
}

export default Friend;