import styled  from "styled-components";

const StyledDiv = styled.div`
  max-width: 1100px;
  padding: 0 40px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
`;

const Container = ({ children }) => {
    return(
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default Container;