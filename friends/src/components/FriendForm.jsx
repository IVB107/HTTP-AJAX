import React from 'react';

import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid forestgreen;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > input {
        margin: 10px 0;
        width: 300px;
    }

    > button {
        margin: 10px 0;
        font-size: 16px;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 15px;
        cursor: pointer;
    }
`;

const FriendForm = props => {
    const { name, age, email } = props.newFriend;
    // Add type checking with PropTypes
    return (
        <FormContainer>
            <h2>Imaginary Friend Generator:</h2>
            <Form 
                isEditing={props.isEditing}
                onSubmit={(e) => props.isEditing ? props.submitEdit(e) : props.addFriend(e)} 
                action=""
            >
                {/* consider refactoring with input component */}
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={props.onChange}
                    value={name || ''} 
                />
                <input 
                    type="number" 
                    name="age"
                    placeholder="Age"
                    onChange={props.onChange}
                    value={age} 
                />
                <input 
                    type="text" 
                    name="email"
                    placeholder="Email"
                    onChange={props.onChange}
                    value={email || ''} 
                />
                {props.isEditing 
                    ? <button type="submit" >Edit Friend</button>
                    : <button type="submit" >Add Friend</button>
                }
            </Form>
        </FormContainer>
    )
}

export default FriendForm;