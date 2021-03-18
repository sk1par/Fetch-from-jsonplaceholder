import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Favorites from './Favorites';
import { useSelector } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => (fn) => () => fn(),
    useSelector: jest.fn(() => []),
}));

const getInitialObject = () => [{
    email: 'test@abv.bg',
    id: 1,
    name: 'test',
    phone: '123132',
    username: 'skipar',
    website: 'abv.bg'
}];

it('should render component correctly', () => {
    const wrapper = shallow(<Favorites />);
    const componentContainer = wrapper.find('[data-auto-id="component-container"]');
    expect(componentContainer).toHaveLength(1);
    const items = wrapper.find('[data-auto-id="user-div-row"]');
    expect(items).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
});

it('should render list of two mock favorite users', () => {
    useSelector.mockReturnValueOnce([getInitialObject(), getInitialObject()]);
    const wrapper = shallow(<Favorites />);
    const items = wrapper.find('[data-auto-id="user-div-row"]');
    expect(items).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
});
