import Pills from "./Pills";
import { Link } from 'react-router-dom';

function GallaryItem({project}) {
    const { img, alt, title, description, title2, description2, liveLink, liveText, videoLink, videoText, repoLink, repoText, blogtitle, blogLink, tags } = project;

    return <>
        <div className="gallary">
            <img src={img} alt={alt} />
            <div className="text">
                <h3><b>{title}</b></h3>
                <p>{description} </p>
                <br />
                {title2 &&
                    <>
                        <h3><b>{title2}</b></h3>
                        <p>{description2}</p>
                    </>
                }
                {
                    blogtitle &&
                    <h4>
                        <b>Blog: </b>
                        <Link to={blogLink} alt="blog link">{blogtitle}</Link>
                    </h4>
                }
                {liveLink &&
                    <h4>
                        <b>Demo: </b>
                        <a target="_blank" rel="noopener noreferrer" href={liveLink}>{liveText}</a>
                    </h4>
                }
                {videoLink &&
                    <h4>
                        <b>Video: </b>
                        <a target="_blank" rel="noopener noreferrer" href={videoLink} >{videoText}</a>
                    </h4>
                }
                <h4>
                    <b>Repo: </b>
                    <a target="_blank" rel="noopener noreferrer" href={repoLink}>{repoText}</a>
                </h4>
                <br />
                <div className="tags">
                    <h4>
                        <b>Tags: </b>
                        {
                            project.tags.map((tag, index) => {
                                return <Pills key={index} text={tag} />
                            })
                        }
                    </h4>
                </div>
            </div>
        </div>
    </>
}

export default GallaryItem;
