import Enzyme, { mount, shallow } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import UserList from './components/user-list/UserList';

Enzyme.configure({ adapter: new Adapter() });


it('should render correct link to Home component', () => {                                       
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
 });

 it('should render correct link to UserList component', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/user-list']}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(UserList)).toHaveLength(1);
 });
