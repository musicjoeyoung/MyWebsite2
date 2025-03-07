import BlogTest from '../../assets/blogs/blogtest.mdx';
import BlogTest2 from "../../assets/blogs/blogtest2.mdx";
import BlogTest3 from "../../assets/blogs/blogtest3.mdx";
import { useState } from 'react';

const blogs: { [key: string]: React.ComponentType } = {
    blogtest: BlogTest,
    blogtest2: BlogTest2,
    blogtest3: BlogTest3
};

const Blog = () => {
    const [currentBlog, setCurrentBlog] = useState('blogtest');

    const changeBlog = (blog: string) => {
        setCurrentBlog(blog);
    };
    return (
        <div >
            <header >
                <h1 >Blogs</h1>
            </header>

            <button onClick={() => changeBlog('blogtest')}>Blog Test</button>
            <button onClick={() => changeBlog('blogtest2')}>Blog Test 2</button>
            <button onClick={() => changeBlog('blogtest3')}>Blog Test 3</button>



            <div >
                {/*                 <BlogTest components={{
                    MyComponent: () => (
                        <div >
                            <h3 >This is a custom component!</h3>
                            <p>It was referenced directly in the MDX file.</p>
                        </div>
                    )
                }} /> */}
                {/* <BlogTest /> */}
                {Object.keys(blogs).map((key: string, index: number) => {
                    const BlogComponent: React.ComponentType = blogs[key];
                    return <BlogComponent key={index} />;
                })}
            </div>
        </div>
    );
};

export default Blog;