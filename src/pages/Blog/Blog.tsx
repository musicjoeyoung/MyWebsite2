import "./Blog.scss"

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
    const [currentBlog, setCurrentBlog] = useState(<BlogTest />);

    const changeBlog = (blogKey: string) => {
        const BlogComponent = blogs[blogKey];
        setCurrentBlog(<BlogComponent />);
    };
    return (
        <div >
            <header >
                <h1 >Blogs</h1>
                <nav>
                    <button onClick={() => changeBlog('blogtest')}>Blog Test</button>
                    <button onClick={() => changeBlog('blogtest2')}>Blog Test 2</button>
                    <button onClick={() => changeBlog('blogtest3')}>Blog Test 3</button>

                </nav>
            </header>

            Outline/Ideas:
            - Blog page with a list of blogs; images with titles
            - Each blog is a markdown file
            - When a blog is clicked, the markdown file is rendered
            - The markdown file is styled with CSS
            - Do I need a SingleBlog component?
            - Do I style a nav element to be position absolute?
            - Do I need a BlogList component?
            - Do I need a Blog component other than this?



            <div className='blog'>
                {currentBlog}
            </div>
        </div>
    );
};

export default Blog;