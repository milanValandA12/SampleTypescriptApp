import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../../src/redux/store';
import LoginScreen from '../../../src/screens/auth/login.screen';

describe('Login screen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});