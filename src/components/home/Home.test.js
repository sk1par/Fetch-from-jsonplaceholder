import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() });

it('should render Home component correctly', () => {
    const wrapper = shallow(<Home />);
    const homeComponentDiv = wrapper.find('[data-auto-id="home-div"]');
    expect(homeComponentDiv).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
});
