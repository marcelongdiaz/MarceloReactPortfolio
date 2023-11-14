import './projects.styles.scss';
import Container from './../../utils/Container/container.component'
import Tag from '../../utils/Tag/tag.component';
import Typography from '../../utils/Typography/typography.component';
const images = require.context('./../../assets/dist/projects', true);
const imageList = images.keys().map(image => images(image));
const Projects = () => {
    console.log()
    return (
        <div className="projects">
          <Container>
            <div className="section-container">
              <div className="section-header">
                {/* <h2 className="section-header-title">Projects</h2> */}
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
                    console.log(image)
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