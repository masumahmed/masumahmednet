import { Link } from "react-router-dom";

function BlogPreview({ props }) {
    let { title, date, author, description, img } = props;
    const titleID = title;

    title = title.replace(/\b\w/g, l => l.toUpperCase());

    if (description.length > 200)
        description = description.substring(0, 200) + '...';

    return <>
        <div className="con border preview" style={{ "borderBottom": "1px solid #3a3a3a" }}>
            <div>
                <img src={img} />
            </div>
            <div>
                <h1><Link to={`/blog/${titleID}`} >{title}</Link></h1>
                <p><i>{author} - {date}</i></p>
                <p>{description}</p>
            </div>
        </div>
    </>
}

export default BlogPreview;
