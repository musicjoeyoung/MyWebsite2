import BlogTest from '../../assets/blogs/blogtest.mdx';
import BlogTest2 from "../../assets/blogs/blogtest2.mdx";
import BlogTest3 from "../../assets/blogs/blogtest3.mdx";

const blogs: { [key: string]: React.ComponentType } = {
    blogtest: BlogTest,
    blogtest2: BlogTest2,
    blogtest3: BlogTest3
};

const Blog = () => {
    return (
        <div >
            <header >
                <h1 >test</h1>
            </header>

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