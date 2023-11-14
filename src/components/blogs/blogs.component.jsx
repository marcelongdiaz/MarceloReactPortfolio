import './blogs.styles.scss';
import Container from './../../utils/Container/container.component'
import Tag from './../../utils/Tag/tag.component'
const blogsImages = require.context("./../../assets/dist/blogs", true);
const images = blogsImages.keys().map(blogImage => blogsImages(blogImage));
const blogsDocument = [
    {
        title: "Using Ngrok in Testing the Project in Web",
        publishedDate: "September 20, 2023",
        tags: ["NGROK", "JAVASCRIPT"],
        description: "Test your app in web using the power of ngrok."
    },
    {
        title: "Testing your Node API using Jest JS",
        publishedDate: "September 31, 2023",
        tags: ["JEST", "TESTING", "JAVASCRIPT", "API"],
        description: "Reduce the time consumed in running manual testing using Jest JS"
    },
    {
        title: "Utilizing git stash commands",
        publishedDate: "October 20, 2023",
        tags: ["GIT", "JAVASCRIPT"],
        description: "Tutorial on how to use git stash in your daily development"
    },
    {
        title: "Utilizing Node JS in Creating Modern API",
        publishedDate: "October 27, 2023",
        tags: ["NODE", "JAVASCRIPT", "API"],
        description: "Create your first API using Node JS"
    },
    {
        title: "How to Use Flexbox?",
        publishedDate: "October 28, 2023",
        tags: ["CSS"],
        description: "This is a tutorial on how to properly use your flexbox in responsive CSS"
    },
    {
        title: "Creating a Simple Loader Using CSS and Javascript",
        publishedDate: "October 30, 2023",
        tags: ["CSS", "JAVASCRIPT"],
        description: "Check out my customized loader with snippets included"
    },
]

const Blogs = () => {
    console.log(images)
    return(
        <div className="blogs">
          {/* <div className="section-container"> */}
          <Container>
            <div className="blogs-content-container">
              <div className="section-header">
                      <h2 className="section-header-title">Blogs</h2>
                      <a href="/projects" className="btn-see-all">See all →</a>
              </div>
              <div className="blogs-list">
                {
                  blogsDocument.map((item, index) => {
                    return(
                      <div className="blog-item" key={`blog-index-${index}`}>
                        <div className="blog-image-container">
                            <img src={images[index]} alt="" className="blog-image"/>
                        </div>

                        <h4 className="blog-title">
                            {item.title}
                        </h4>

                        <span className="blog-date"> { item.publishedDate } </span>

                        <div className="blog-tag-container">
                            {
                                item.tags.map((tag, tagIndex) => {
                                    return(
                                        <Tag tagLabel={tag} key={tagIndex} />
                                    )
                                })
                            }
                            
                        </div>

                        <div className="blog-description">
                            {item.description}
                        </div>
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

export default Blogs;