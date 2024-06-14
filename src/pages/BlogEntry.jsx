import { useParams } from 'react-router-dom';
import Showdown from 'showdown';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogData from '../data/BlogData.json';

function BlogEntry() {
    let { title } = useParams();

    let date = '', author = '', text = '', md = '';
    BlogData.forEach(entry => {
        if (entry.title === title) {
            date = entry.date;
            author = entry.author;
            text = entry.text;
            md = entry.md;
            // convert md to html
            let converter = new Showdown.Converter();
            // html = converter.makeHtml(md);
        }
    });

    title = title.replace(/\b\w/g, l => l.toUpperCase());
    title = title.replace('-', ' ');

    return <>
        <div id="bodyWrapper">
            <Header />
            <div className="content">
                <div className="con border" style={{ "borderBottom": "1px solid #3a3a3a" }}>
                    <br />
                    {!date && <>
                        <h1 style={{ "textAlign": "center" }}>404</h1>
                        <h1 style={{ "textAlign": "center" }}>no such blog exists</h1>
                    </>}
                    {date && <>
                        <h1 style={{ "textAlign": "center" }}>{title}</h1>
                        <hr />
                        <p><i>{author} - {date}</i></p>
                        <hr />
                        <p>{text}</p>
                    </>}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default BlogEntry;
