import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPreview from '../components/BlogPreview';
import BlogData from '../data/BlogData.json';

function Blog() {
    return <>
        <div id="bodyWrapper">
            <Header />
            <div className="content">
                {BlogData.map(entry => {
                    return <BlogPreview key={entry.title} props={entry} />
                })}
                <br />
            </div>
        </div>
        <Footer />
    </>
}

export default Blog;
