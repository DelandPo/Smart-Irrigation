import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #00ced1;
  width: 100%;
  height: 100%;
`;

export const TouchContainer = styled.TouchableOpacity.attrs({
  underlayColor: "#00ced1"
})`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
