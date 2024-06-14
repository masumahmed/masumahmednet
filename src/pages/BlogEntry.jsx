import { useParams } from 'react-router-dom';
import Showdown from 'showdown';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogData from '../data/BlogData.json';

function BlogEntry() {
    const [htmlContent, setHtmlContent] = useState('');
    let { title } = useParams();
    
    let date = '', author = '', md="", description = '';
    BlogData.forEach(entry => {            
        if (entry.title === title) {
            date = entry.date;
            author = entry.author;
            md = entry.md;
            description = entry.description;
        }
    });
    
    useEffect(() => {
        let html = '';
        const converter = new Showdown.Converter();
        for (let i = 0; i < md.length; i++)
            html += converter.makeHtml(md[i]);
        setHtmlContent(html);
    }, []);


    title = title.replace(/\b\w/g, l => l.toUpperCase());
    title = title.replace('-', ' ');

    return <>
        <div id="bodyWrapper">
            <Header />
            <div className="content">
                <div className="con border markdown" style={{ "borderBottom": "1px solid #3a3a3a" }}>
                    <br />
                    {!date && <>
                        <h1 style={{ "textAlign": "center" }}>404</h1>
                        <h1 style={{ "textAlign": "center" }}>no such blog exists</h1>
                    </>}
                    {date && <>
                        <h1 style={{ "textAlign": "center" }}>{title}</h1>
                        <hr />
                        <p><i>{author} - {date} - {description}</i></p>
                        <hr />
                        <div id="blog">
                            {parse(htmlContent)}
                        </div>
                    </>}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default BlogEntry;
