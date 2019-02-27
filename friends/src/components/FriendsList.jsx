import React from 'react';
import styled from 'styled-components';

import Friend from './Friend';

const ListContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
    /* border: 2px solid red; */
`;

const FriendsList = props => {
    const { friends } = props;
    return (
        <ListContainer>
            { friends.map(friend => {
                return (
                    <Friend { ...props } friend={friend} key={friend.id} />
                )
            }) }
        </ListContainer>
    )
}

export default FriendsList;