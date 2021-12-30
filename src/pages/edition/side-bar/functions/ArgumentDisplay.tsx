import styled from "styled-components";
import TypesColors from "../../../../theme/types-colors/TypesColors";
import TypesIcons from "../../../../theme/types-colors/TypesIcons";
import ValueType from "../../../../types/value-type/ValueType";
import { getArgumentName } from "../../editor/nodes/FunctionNode";

type ArgumentDisplayProps = {
  arg: ValueType | ValueType[];
  additional?: boolean;
}

const ArgumentDisplay = ({ arg, additional }: ArgumentDisplayProps) => {
  const type = Array.isArray(arg) ? arg[0] : arg;

  const name = getArgumentName(arg);

  const Icon = TypesIcons[type] || TypesIcons.default;

  const color = TypesColors[type] || TypesColors.default;

  return (
    <Container>
      <IconContainer>
        <Icon color={`rgb(${color[0]}, ${color[1]}, ${color[2]})`} />
      </IconContainer>
      <div>
        {name}
      </div>
      {additional && <div style={{ marginLeft: "0.1rem", fontStyle: "italic", fontWeight: "normal" }} >(additional)</div>}
    </Container>
  )
}

const Container = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

const IconContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--darker);
  margin-right: 0.2rem;
`

export default ArgumentDisplay;