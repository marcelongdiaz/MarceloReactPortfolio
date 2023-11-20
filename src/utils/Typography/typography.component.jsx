import styled, {css} from "styled-components";
import { useMediaQuery } from "react-responsive";

// 0 = mobile
// 1 = tablet/laptop
// 2 = desktop
const globalColor = '#393e46';

const customCss = css`
  color: red;
`

const StyledSpan = styled.span`
    font-size: 14px;
    font-family: 'Montserrat', san-serif;
    color: ${globalColor};
`

const StyledHeader = styled.h1`
  font-size: 50px;
  font-weight: bolder;
  color: ${globalColor};

  ${(props)=> {
    if(props.$sm){
      return css`
        font-size: 20px;
      `
    }
    else if(props.$lg) {
      return css`
        font-size: 50px;
      `
    }
    else if(props.$md) {
      return css`
        font-size: 30px;
      `
    }
  }}
`

const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: bolder;
  color: ${globalColor};

  ${(props)=> {
    if(props.$sm){
      return css`
        font-size: 20px;
      `
    }
    else if(props.$lg) {
      return css`
        font-size: 30px;
      `
    }
    else if(props.$md) {
      return css`
        font-size: 20px;
      `
    }
  }}
`


const StyledSubheader = styled.h2`
  font-size: 16px;
  color: #393e46;
  opacity: 80%;
  font-weight: bold;

  ${(props)=> {
    if(props.$sm){
      return css`
        font-size: 13px;
      `
    }
    else if(props.$lg) {
      return css`
        font-size: 14px;
      `
    }
    else if(props.$md) {
      return css`
        font-size: 16px;
      `
    }
  }}
`

const StyledParagraph = styled.p`
  font-size: 16px;
  color: #393e46;
`
const typographyHandler = (_type, _params, _children, sm, md, lg) => {
  switch(_type){
    case "p": 
      return <StyledParagraph $sm={sm} $md={md} $lg={lg} {..._params}>{_children}</StyledParagraph>;
    case "subheader": 
      return <StyledSubheader $sm={sm} $md={md} $lg={lg} {..._params}>{_children}</StyledSubheader>;
    case "header": 
      return <StyledHeader $sm={sm} $md={md} $lg={lg} {..._params}>{_children}</StyledHeader>;
    case "title": 
      return <StyledTitle $sm={sm} $md={md} $lg={lg} {..._params}>{_children}</StyledTitle>;
    case "span": 
      return <StyledSpan $sm={sm} $md={md} $lg={lg} {..._params}>{_children}</StyledSpan>;
    default:
      return <StyledParagraph $sm className={customCss} {..._params}>{_children}</StyledParagraph>;
  }
}

const Typography = ({textType, children, ...parameters}) => {

  
  // const md = useMediaQuery({ minWidth: 1224 });
  // const lg = useMediaQuery({ minWidth: 1824 });
  const sm = useMediaQuery({ maxWidth: 850 });
  const md = useMediaQuery({ minWidth: 850 });
  const lg = useMediaQuery({ minWidth: 1224 });
  console.log(md)
  return (
    <>
      { typographyHandler(textType, parameters, children, sm, md, lg) }
    </>
  )
}

export default Typography;
