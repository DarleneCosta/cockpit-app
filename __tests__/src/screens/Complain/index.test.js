import { render, screen } from "@testing-library/react-native";
import Complain from "../../../../src/screens/Complain";
import types from "../../../../src/services/mocks/complains";

const mockTypes = types;

jest.mock('../../../../src/screens/Complain/ComboBox');
jest.mock("../../../../src/hooks/useComplain", () => ({
    useTypesComplain: jest.fn(() => mockTypes)
}));
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
  useRoute: jest.fn().mockReturnValue({
    params: jest.fn(),
  }),
}));

describe("screens/Complain", () => { 
  it("should render correctly", () => {
    render(<Complain />);

    expect(screen.getByA11yHint("Voltar para a tela anterior")).toBeTruthy();
    expect(screen.getByA11yHint("Iniciar atendimento por WhatsApp")).toBeTruthy();
    expect(screen.getByText("Fale Conosco")).toBeTruthy();
    expect(screen.getByText("Id do pedido")).toBeTruthy();
    expect(screen.getByText("Motivo do contato *")).toBeTruthy();
    expect(screen.getByText("Tipo *")).toBeTruthy();
    expect(screen.getByText("Descrição")).toBeTruthy();
    expect(screen.getByText("Adicione evidências aqui")).toBeTruthy();
  });
});
