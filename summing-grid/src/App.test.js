import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe("App Component", () => {

  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('user input for value1 is echoed', () => {
    const wrapper = shallow(<App />);

    wrapper.find('input[name="value1"]').simulate('change', createEvent('value1', 1));

    expect(wrapper.find('[name="value1"]').props().value).toBe(1);
  });

  it('user input for value2 is echoed', () => {
    const wrapper = shallow(<App />);

    wrapper.find('input[name="value2"]').simulate('change', createEvent('value2', 1));

    expect(wrapper.find('input[name="value2"]').props().value).toBe(1);
  });

  it('user input for value3 is echoed', () => {
    const wrapper = shallow(<App />);

    wrapper.find('input[name="value3"]').simulate('change', createEvent('value3', 1));

    expect(wrapper.find('input[name="value3"]').props().value).toBe(1);
  });

  it('user clicks add button and result is echoed', () => {
    const wrapper = shallow(<App />);

    wrapper.find('input[name="value1"]').simulate('change', createEvent('value1', 123456));
    wrapper.find('input[name="value2"]').simulate('change', createEvent('value2', 1));
    wrapper.find('input[name="value3"]').simulate('change', createEvent('value3', 1));
    wrapper.find('Button[value="Add"]').prop('calculate')();

    expect(wrapper.find('input[name="result"]').props().value).toBe(123458);
  });
  it('user clicks format button and formatted result is echoed', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="value1"]').simulate('change',createEvent('value1', 123456));
    wrapper.find('input[name="value2"]').simulate('change', createEvent('value2', 1));
    wrapper.find('input[name="value3"]').simulate('change',createEvent('value3', 1));
    wrapper.find('Button[value="Add"]').prop('calculate')();
    wrapper.find('Button[value="Format"]').prop('calculate')();

    expect(wrapper.find('input[name="result"]').props().value).toBe('123K');
  });

  function createEvent(name, value) {
    return {
      target : {
        name: name,
        value: value
      }
    }
  }
});

