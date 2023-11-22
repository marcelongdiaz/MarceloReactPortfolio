import Container from './../../utils/Container/container.component'
import Tag from '../../utils/Tag/tag.component';
import Typography from '../../utils/Typography/typography.component';
import './projects.styles.scss';

const images = require.context('./../../assets/dist/projects', true);
const imageList = images.keys().map(image => images(image));

const Projects = () => {
  return (
    <div className="projects">
      <Container>
        <div className="section-container">
          <div className="section-header">
            <Typography 
              className="section-header-title"
              textType='title'
            >
              Projects
            </Typography>
            <a href="/projects" className="btn-see-all">See all →</a>
          </div>
          <div className="tags-container">
            <Tag tagLabel={"REACT JS"}/>
            <Tag tagLabel={"FIREBASE"}/>
            <Tag tagLabel={"JEST JS"}/>
            <Tag tagLabel={"VUE JS"}/>
          </div>
          <div className="gallery-container">
            {
              imageList.map((image, index)=> {
                return(
                  <div className="gallery-image-container" key={index}>
                      <img src={image} className="gallery-image" alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects;