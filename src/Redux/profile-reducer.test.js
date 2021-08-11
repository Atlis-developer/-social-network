import { render, screen } from '@testing-library/react';

import { profileReducer } from './profile-reducer';

test('renders learn react link', () => {

let action = addPostActionCreate ('bla-bla-bla')
let defaultState = {
    posts: [
        { message: 'Hello world!', like: '10' },
        { message: 'I want to learn ReactJS', like: '42' },
        { message: 'Hello Ukraine!', like: '50' },
        { message: 'JavaScript is cool!', like: '242' },
    ],
    profile: null,
    status: ''
};
let newState = profileReducer (defaultState, action)  

  expect(newState.posts.length).toBe(5);
});
