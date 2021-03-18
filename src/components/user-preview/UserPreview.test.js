import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserPreview from './UserPreview';
import { useSelector } from 'react-redux';
import  addToFavorite from '../../actions/addToFavorite';


Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-redux', () => ({
    useDispatch: () => (fn) => () => fn(),
    useSelector: jest.fn(() => []),
}));
jest.mock('../../actions/addToFavorite', () => {
    const addToFavorite = jest.fn();
    return addToFavorite;
});

const getInitialObject = () => [{
    email: 'test@abv.bg',
    id: 1,
    name: 'test',
    phone: '123132',
    username: 'skipar',
    website: 'abv.bg'
}];

it('should render User Preview component correctly', () => {
    const wrapper = shallow(<UserPreview />);
    const userPreviewDiv = wrapper.find('[data-auto-id="user-preview-div"]');
    expect(userPreviewDiv).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
});

it.only('should trigger add to favorite action correctly after click', () => {
    const value = getInitialObject();
    useSelector.mockReturnValueOnce(value);
    const wrapper = mount(<UserPreview />);
    const item = wrapper.find('[data-auto-id="btn"]');
    item.simulate('click');
    expect(addToFavorite).toHaveBeenCalledTimes(1);
    expect(addToFavorite).toHaveBeenCalledWith(value);
    expect(wrapper).toMatchSnapshot();
});