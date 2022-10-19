

import { render, screen} from '@testing-library/react-native';
import { Text } from 'react-native';
import useOrder from '../../../../src/hooks/useOrder';
import Order from '../../../../src/screens/Order';
import Adresses from '../../../../src/screens/Order/Adresses';
import order from '../../../../src/services/mocks/order';


const mockOrder = order
const mockLoadOrder = jest.fn();
jest.mock('../../../../src/hooks/useOrder', () => jest.fn(() => ([
  mockOrder,
  mockLoadOrder,
])));



jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
}));



describe('screens/Order', () => {

  const [ order, getOrder ] = useOrder();

  beforeEach(() => {
    mockLoadOrder.mockClear();
  });
  it('should render correctly', () => {
   
    render(<Order />);
    screen.debug()
  });
});

