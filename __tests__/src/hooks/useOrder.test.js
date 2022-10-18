import { renderHook, act } from "@testing-library/react-hooks";
import { loadOrder } from "../../../src/services/repositories/order";
import useOrder from "../../../src/hooks/useOrder"
import order from "../../../src/services/mocks/order";

jest.mock('../../../src/services/repositories/order');

const mockOrder = order

describe('hooks/useOrder', ()=>{
    it('should return objet order', () => {
        loadOrder.mockImplementation(() => mockOrder);    
        const { result } = renderHook(() => useOrder());
        expect(result.current).toEqual(mockOrder);         
    });
})