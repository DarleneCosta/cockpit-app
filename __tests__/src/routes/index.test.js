
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import Routers from '../../../src/routers';
import Order from '../../../src/screens/Order';
import Complain from '../../../src/screens/Complain';
import Chat from '../../../src/screens/Chat';

jest.mock('../../../src/screens/Order');
jest.mock('../../../src/screens/Complain');
jest.mock('../../../src/screens/Chat');

describe('Routers', () => {
  it('should render correctly', () => {

    Order.mockImplementation(() => <View testID="Order" />);
    Complain.mockImplementation(() => <View testID="Complain" />);
    Chat.mockImplementation(() => <View testID="Chat" />);

    const { toJSON } = render(<Routers />);

    expect(toJSON()).toMatchSnapshot();
  });
});

