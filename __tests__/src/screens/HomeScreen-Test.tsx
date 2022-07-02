import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../../src/redux/store';
import HomeScreen from '../../../src/screens/main/home/home.screen';

describe('Home screen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});