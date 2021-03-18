import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FavoriteUser from './FavoriteUser';

Enzyme.configure({ adapter: new Adapter() });

it('should render user details  div', () => {
    const wrapper = shallow(<FavoriteUser />);
    const userDetailDiv = wrapper.find('[data-auto-id="user-detail-div"]');
    expect(userDetailDiv).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
});
