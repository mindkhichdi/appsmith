import styled from "styled-components";
import Button from "components/editorComponents/Button";

export default styled(Button)`
  height: 32px;
  margin: 5px;
  color: white !important;
  border: none !important;
  :hover {
    color: ${props => props.theme.colors.primary} !important;
    &&& {
      svg > path {
        fill: ${props => props.theme.colors.primary} !important;
      }
    }
  }
`;
