import Container from '../../utils/Container/container.component'
import './footer.styles.scss'

import IconFacebook from './../../assets/images/FOOTER_SOCIAL_FACEBOOK.png'
import IconGithub from './../../assets/images/FOOTER_SOCIAL_GITHUB.png'
import IconLinkedin from './../../assets/images/FOOTER_SOCIAL_LINKEDIN.png'
const Footer = () => {
  return(
    <div className="footer" id="footer">
      <Container>
        <div className="footer-content-container">
          <div className="group-icon-container">
            <a href="www.linkedin.com" target='_blank' className='link-icon'>
              <img src={IconLinkedin} alt='linkedin-icon'/>
            </a>
            <a href="github.com" target='_blank' className='link-icon'>
              <img src={IconGithub} alt='linkedin-icon'/>
            </a>
            <a href="facebook.com" target='_blank' className='link-icon'>
              <img src={IconFacebook} alt='linkedin-icon'/>
            </a>
          </div>
          <p className="copyright-text">
            ©️ 2023 . Marcelo Diaz | All rights reserved 
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Footer;