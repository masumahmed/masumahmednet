import { Link } from "react-router-dom";

function BlogPreview({ props }) {
    let { hash, title, date, tags, description, img } = props;
    let titleURL = title.replace(/ /g, '-').toLowerCase();
    if (description.length > 200)
        description = description.substring(0, 200) + '...';

    // remove tags leading spaces and prepend '#'
    tags = tags.replace(/ /g, '');
    tags = tags.split(',').map(tag => {
        return '#' + tag;
    }).join(', ');

    if (img === "")
        img = "/public/assets/img/android-icon-48x48.png";

    return <>
        <div className="con border preview" style={{ "borderBottom": "1px solid #3a3a3a" }}>
            <div>
                <img src={img} />
            </div>
            <div>
                <h1><Link to={`/blog/${hash}/${titleURL}`} >{title}</Link></h1>
                <p>{description}</p>
                <p>{date} • {tags}</p>
            </div>
        </div>
    </>
}

export default BlogPreview;
