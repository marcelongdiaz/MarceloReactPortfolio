import logo from './../../assets/images/logo.png';
import Container from '../../utils/Container/container.component';
import { Menu, Close } from '@mui/icons-material';
import Button from '../../utils/Button/button.component';
import { useMediaQuery } from 'react-responsive'
import './navigation.styles.scss';
import { useState } from 'react';
const Navigation = () => {

  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  const sm = useMediaQuery({ maxWidth: 1224 });
  // const md = useMediaQuery({ minWidth: 1224 });
  // const lg = useMediaQuery({ minWidth: 1824 });

  const isDrawerOpenHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

    return(
      <> 
        <div id="navigation">
          <Container>
            
            <div className="navigation-content-container">
              <div className="navigation-logo-container">
                <img src={logo} alt="" />
              </div>
              
                {
                  sm? (
                    <Button 
                      onClick={isDrawerOpenHandler}
                      label={<Menu fontSize="small"/>} 
                      isRounded={true} 
                      sz='xs'
                      roundedSize={5}
                      
                      sx={{justifyContent: 'end', background: 'transparent', color:'rgb(102 102 102)', border: '1px solid rgb(102 102 102)'}}
                      />
                  )
                  :(
                  <div className="navigation-links-container">
                    <a href="/home" className='navigation-link'><span>HOME</span></a>
                    <a href="/projects" className='navigation-link'><span>PROJECTS</span></a>
                    <a href="/blogs" className='navigation-link'><span>BLOGS</span></a>
                    <a href="/contacts" className='navigation-link'><span>CONTACTS</span></a>
                  </div>
                  )
                }
              
            </div>
          </Container>
        </div>
        <div className="drawer" style={{ right: sm && isDrawerOpen?'0%':'100%' }}>
            <div className="navigation-links-container-mobile">
                  <div className="action-button">
                    <div className="navigation-logo-container">
                      <img src={logo} alt="" />
                    </div>
                    <Button
                      label={ <Close/> }
                      isRounded={true} 
                      onClick={isDrawerOpenHandler}
                      hover={false}
                      sz='xs'
                      roundedSize={5}
                      sx={
                        {
                          border: 'none' ,
                          color: 'rgb(102 102 102)',
                          background: 'transparent',
                          pointerEvents: 'auto',
                          

                        }
                      }
                    />
                  </div>
                  <a href="/home" className='navigation-link'><span>HOME</span></a>
                  <a href="/projects" className='navigation-link'><span>PROJECTS</span></a>
                  <a href="/blogs" className='navigation-link'><span>BLOGS</span></a>
                  <a href="/contacts" className='navigation-link'><span>CONTACTS</span></a>
            </div>
        </div>
      </>
    )
}

export default Navigation;