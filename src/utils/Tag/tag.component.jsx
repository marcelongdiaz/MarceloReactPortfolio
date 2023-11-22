import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  background: #393e46;
  color: #ffffff;
  font-size: 8px;
  border-radius: 50px;
  text-wrap: nowrap;
  border: none;
`
const Tag = ({ tagLabel, actionHandler, ...props }) => {
  return(
    <StyledButton {...props}> 
      { tagLabel }
    </StyledButton>
  )
}

export default Tag;