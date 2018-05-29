import TimerTitle from './timer-title'
import Timer from '../reducers/timer'

// https://www.leighhalliday.com/testing-react-jest-enzyme-sinon

describe('TimerTitle', () => {
  it ('should render correctly', () => {
    const name = "Hello";
    const timer = new Timer(name)
    // timer.time = 12345
    const wrapper = shallow(<TimerTitle timer={timer} />)
    expect(wrapper).toMatchSnapshot()
  })
})

// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
//
// import TimerTitle from './timer-title';
// import Timer from '../reducers/timer';
//
describe('TimerTitle 2', () => {
  it('Should render', () => {
    const name = "Hello";
    const timer = new Timer(name);
    const timerTitle = shallow(<TimerTitle timer={timer} />);
    expect(timerTitle.find('.timer-view-name__h2').length).toBe(1);
    expect(timerTitle.find('.timer-view-name__h2').text()).toEqual(name);
    expect(timerTitle.find('.timer-view-time__h1').length).toBe(1);
    expect(timerTitle.find('.timer-view-time__h1').text()).toEqual('0:0:0.0');
  });
});





//
