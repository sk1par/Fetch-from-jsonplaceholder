import { shallow, mount } from 'enzyme';
import UserList from './UserList';
import  setSelectedUser from '../../actions/setSelectedUser';
import { useSelector } from 'react-redux';
import { shallowToJson } from 'enzyme-to-json';
import {useUsers} from '../../hooks/useUsers';

jest.mock('../../actions/setSelectedUser', () => {
    const setSelectedUser = jest.fn();
    return setSelectedUser;
});

jest.mock('../../hooks/useUsers');

const getInitialObject = () => [{
    email: 'test@abv.bg',
    id: 1,
    name: 'test',
    phone: '123132',
    username: 'skipar',
    website: 'abv.bg'
}];

it('should render User User List component correctly', () => {
    const wrapper = shallow(<UserList />);
    const userPreviewDiv = wrapper.find('[data-auto-id="user-list-div"]');
    expect(userPreviewDiv).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
});

it('should trigger set selected user action correctly after click', () => {
    useUsers.mockReturnValueOnce([getInitialObject()]);
    const wrapper = shallow(<UserList />);
    const item = wrapper.find('[data-auto-id="user-element-div"]');
    item.simulate('click');
    expect(setSelectedUser).toHaveBeenCalledTimes(1);
    expect(setSelectedUser).toHaveBeenCalledWith(getInitialObject());
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});