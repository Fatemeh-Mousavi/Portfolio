import "../Blog.css";
function BlogCard(props){
    return(
        <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src={props.img} className="img-fluid" alt="Blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{props.title}</h3>
                <p className="blog-desc">
                {props.text}
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">{props.author}</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {props.time}
                </div>
              </div>
            </div>
          </div>
    )
}
export default BlogCard;