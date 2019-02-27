import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    const { friends } = props;
    return (
        <div>
            { friends.map(friend => {
                return (
                    <Friend { ...props } friend={friend} key={friend.id} />
                )
            }) }
        </div>
    )
}

export default FriendsList;