import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import User from './User';
import { useSelector } from 'react-redux';
import  setSelectedUser from '../../actions/setSelectedUser';


Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-redux', () => ({
    useDispatch: () => (fn) => () => fn(),
    useSelector: jest.fn(() => []),
}));
jest.mock('../../actions/setSelectedUser', () => {
    const setSelectedUser = jest.fn();
    return setSelectedUser;
});

const getInitialObject = () => [{
    email: 'test@abv.bg',
    id: 1,
    name: 'test',
    phone: '123132',
    username: 'skipar',
    website: 'abv.bg'
}];

it('should render div with user info correctly', () => {
    const value = getInitialObject();
    useSelector.mockReturnValueOnce([value]);
    const wrapper = shallow(<User user={value} />);
    const item = wrapper.find('[data-auto-id="user-div"]');
    item.simulate('click');
    expect(setSelectedUser).toHaveBeenCalledTimes(1);
    expect(setSelectedUser).toHaveBeenCalledWith(value);
    expect(wrapper).toMatchSnapshot();
});
