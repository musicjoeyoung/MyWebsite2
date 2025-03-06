//import BlogTest from './blogtest.mdx';
import BlogTest from "./blogtest2.mdx"

const Blog: React.FC = () => {
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
                <BlogTest />
            </div>
        </div>
    );
};

export default Blog;