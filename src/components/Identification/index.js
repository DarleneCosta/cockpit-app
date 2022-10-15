import Divider from "./../Divider";
import TextKeyValue from "./../TextKeyValue";
import colors from "./../../styles/colors";

const Identification = ({ label, valueID }) => {
  return (
    <>
      <Divider color={colors.primary.main} margin={20} />
      <TextKeyValue label={label} value={`#${valueID}`} />
      <Divider color={colors.primary.main} margin={20} />
    </>
  );
};
export default Identification;
