import BannerImage from './../../assets/images/marcelo-chibi-transparent.png'
import Button from '../../utils/Button/button.component';
import Container from '../../utils/Container/container.component';
import Typography from '../../utils/Typography/typography.component';
import { useMediaQuery } from 'react-responsive';
import styled, {css} from 'styled-components';
import './banner.styles.scss';

const StyledBannerImage = styled.div`
  ${
    props => (props.$screensz === 'sm') 
    && 
    css`
      max-width: 150px!important;
    `
  }
`
const Banner = () => {

  const sm = useMediaQuery({ maxWidth: 1224 });

    const bannerClickEvent = () => {
        alert('banner button clicked')
    }
    return(
      <div className="banner">
        <Container>
          <div className="banner-content-container">
            <StyledBannerImage src={BannerImage} className="banner-image-container" $screensz={sm?'sm':''}>
              <img src={BannerImage} alt="" className='banner-image'/>
              {/* < alt="" className='banner-image' > */}
            </StyledBannerImage>
            <div className="banner-content">
              <Typography textType='header' className="banner-content-header">
                Marcelo Diaz Jr
              </Typography>
              <Typography textType='subheader' className="banner-content-subheader">
                Software Engineer | Designer
              </Typography>
              <Typography textType='p' className="banner-content-description">
                Looking for a good website to leverage your brand? Hit me up, and let’s create something cool. 
              </Typography>
              <Button 
                label='See my projects  →' 
                sz='md' 
                isRounded={true} 
                theme='light'
                onClick={bannerClickEvent}
              />
            </div>
          </div>
        </Container>
      </div>
    )
}

export default Banner;