import { Link } from "react-router-dom";

function BlogPreview({ props }) {
    let { title, date, author, description } = props;
    const titleID = title;

    title = title.replace(/\b\w/g, l => l.toUpperCase());
    title = title.replace('-', ' ');

    if (description.length > 200)
        description = description.substring(0, 200) + '...';

    return <>
        <div className="con border" style={{ "borderBottom": "1px solid #3a3a3a" }}>
            <h1><Link to={`/blog/${titleID}`} >{title}</Link></h1>
            <p><i>{author} - {date}</i></p>
            <p>{description}</p>
        </div>
    </>
}

export default BlogPreview;
