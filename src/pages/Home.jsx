import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    const [text, setText] = useState("Software Engineer");

    useEffect(() => {
        const labels = ["Software Engineer", "Projects", "Photos", "Contact"];
        let index = 0;
        const interval = setInterval(() => {
            setText(labels[index]);
            index = (index + 1) % labels.length;
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <>
        <div id="bodyWrapper">
            <Header />
            <div id="carousel">
                <p id="carouselWord">{text}</p>
            </div>
            <div className="content nuetral">
                <div className="con">
                    <div id="readme"><h1 id="hello">Hello</h1>
                        <p>Welcome to my personal website. This site is intended to showcase my porfolio, projects and notes. It's also a handy way to get in contact with me and serves as a central hub for my professional online appearance.</p>
                        <p>My name is <code>Masum Ahmed</code> and I am a computer science major with a passion for programming and web development. I am currently studying at CUNY Hunter College and have a strong interest in web development and data science.</p>
                        <p>In my free time, I enjoy learning about new technologies and exploring the latest trends in the field of computer science. I have experience with a variety of programming languages, including <code>C++</code>, <code>Python</code>, and <code>JavaScript</code>, and I am always looking for opportunities to apply my knowledge to real-world problems.</p>
                        <p>As a programmer, I am constantly exploring new ideas and concepts, and I am always looking for ways to improve my skills and expand my knowledge. I am looking forward to a future in the exciting and dynamic field of computer science.</p>
                        <p>Thank you for visiting my website. Please feel free to explore my projects, learn more about my interests, and get in touch with me if you have any questions or would like to collaborate on a project.</p>
                        <p><br /></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Home;
