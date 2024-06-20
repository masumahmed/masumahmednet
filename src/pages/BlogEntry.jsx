import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Showdown from 'showdown';
import showdownHighlight from "showdown-highlight";
import 'highlight.js/styles/atom-one-dark.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import BlogData from '../data/BlogData.json';

function BlogEntry() {
    const [htmlContent, setHtmlContent] = useState('');
    const { hash } = useParams();
    const { pathname } = useLocation();
    
    let title = '', date = '', author = '', md="", img = '', tags = '';
    BlogData.forEach(entry => {            
        if (entry.hash === hash) {
            title = entry.title;
            date = entry.date;
            author = entry.author;
            md = entry.md;
            img = entry.img;
            tags = entry.tags;
        }
    });

    // put # in front of each tag
    tags = tags.replace(/ /g, '');
    tags = tags.split(',').map(tag => {
        return '#' + tag;
    }).join(', ');
    
    useEffect(() => {
        let html = '';
        const converter = new Showdown.Converter({
            extensions: [
                showdownHighlight({ pre: true, auto_detection: true })
            ],
            ghCodeBlocks: true,
            simpleLineBreaks: true,
            openLinksInNewWindow: true,
        });
        
        // turn md into a str from a json
        let tmp = '';
        for (let i = 0; i < md.length; i++) 
            tmp += md[i] + '\n';
        
        html = converter.makeHtml(tmp);
        setHtmlContent(html);
        window.scrollTo(0, 0);

    }, [pathname]);

    return <>
        <div id="bodyWrapper">
            <Modal />
            <Header />
            <div className="content">
                <div className="con border markdown">
                    {!date && <>
                        <h1 style={{ "textAlign": "center" }}>error 404 - no such blog exists</h1>
                        {
                            setTimeout(() => {
                                window.location.href = '/blog';
                            }, 5000)
                        }
                    </>}
                    {date && <>
                    {img && <>
                        <img className="previewImage" src={img} />
                        <br />
                    </>}
                        <br />
                        <h1 style={{ "textAlign": "left" }}>{title}</h1>
                        <hr />
                        <p><i>{author} - {date} - {tags}</i></p>
                        <hr />
                        <div id="blog">
                            {parse(htmlContent)}
                        </div>
                        <br />
                    </>}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default BlogEntry;
