import "./Blog.css";
import BlogCard from "./blogCard/BlogCard";
import imgBlog1 from "../../img/post-1.jpg";
import imgBlog2 from "../../img/post-2.jpg";
import imgBlog3 from "../../img/post-3.jpg";
function Blog() {
  let infoBlog = [
    {
      id: 1 , 
      img: imgBlog1,
      title : "Blog 1", 
      text : `  Proin eget tortor risus. Pellentesque in ipsum id orci porta
      dapibus. Praesent sapien massa, convallis a pellentesque nec,
      egestas non nisi.`, 
      author :"Mahya Mousavi", 
      time: "15",  
    } , 
    {
      id: 2 , 
      img: imgBlog2,
      title : "Blog 2", 
      text : `  Proin eget tortor risus. Pellentesque in ipsum id orci porta
      dapibus. Praesent sapien massa, convallis a pellentesque nec,
      egestas non nisi.`, 
      author :"Fatemeh Mousavi", 
      time: "10",  
    } ,
    {
      id: 3 , 
      img: imgBlog3,
      title : "Blog 3", 
      text : `  Proin eget tortor risus. Pellentesque in ipsum id orci porta
      dapibus. Praesent sapien massa, convallis a pellentesque nec,
      egestas non nisi.`, 
      author :"Ali Mousavi", 
      time: "15",  
    } ,
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
            {/* <BlogCard {...infoBlog[0]}></BlogCard>
            <BlogCard {...infoBlog[1]}></BlogCard>
            <BlogCard {...infoBlog[2]}></BlogCard> */}
            {
              infoBlog.map(blog => <BlogCard key={blog.id} {...blog}/>)
            }

        </div>
      </div>
    </section>
  );
}
export default Blog;
