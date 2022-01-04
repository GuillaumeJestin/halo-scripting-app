import { memo } from "react";
import styled from "styled-components";
import PressableDiv from "../../../../common/PressableDiv";
import Radio from "../../../../common/Radio";
import FunctionCategoryType from "../../../../types/function-type/FunctionCategoryType";

type CategoryChoiceProps = {
  category: FunctionCategoryType;
  setCategory: (value: FunctionCategoryType) => void;
}

const CategoryChoice = ({ category, setCategory }: CategoryChoiceProps) => {

  return (
    <Container>
      <Item category="common" setCategory={setCategory} name="Common" isSelected={category === "common"} />
      <Item category="hce" setCategory={setCategory} name="Halo CE" isSelected={category === "hce"} />
      <Item category="h2" setCategory={setCategory} name="Halo 2" isSelected={category === "h2"} />
      <Item category="h3" setCategory={setCategory} name="Halo 3" isSelected={category === "h3"} />
    </Container>
  )
}

type ItemProps = {
  category: FunctionCategoryType;
  setCategory: (value: FunctionCategoryType) => void;
  name: string;
  isSelected: boolean;
}

const Item = memo(({ category, setCategory, name, isSelected }: ItemProps) => {

  return (
    <PressableDiv onPress={() => setCategory(category)} >
      <Radio tabIndex={-1} value={isSelected} style={{ marginRight: "0.5rem" }} />
      {name}
    </PressableDiv>
  )
})

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default CategoryChoice;