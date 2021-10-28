import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonDiv>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonDiv>
    </SContainer>
  );
};

const SButtonDiv = styled.div`
  padding-left: 8px;
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
