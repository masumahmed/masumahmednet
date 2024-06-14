import { Link } from "react-router-dom";

function BlogPreview({ props }) {
    let { hash, title, date, author, description, img } = props;
    let titleURL = title.replace(/ /g, '-').toLowerCase();
    if (description.length > 200)
        description = description.substring(0, 200) + '...';

    return <>
        <div className="con border preview" style={{ "borderBottom": "1px solid #3a3a3a" }}>
            <div>
                <img src={img} />
            </div>
            <div>
                <h1><Link to={`/blog/${hash}/${titleURL}`} >{title}</Link></h1>
                <p><i>{author} - {date}</i></p>
                <p>{description}</p>
            </div>
        </div>
    </>
}

export default BlogPreview;
