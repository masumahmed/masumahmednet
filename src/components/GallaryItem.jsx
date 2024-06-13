function GallaryItem({ project }) {
    const { img, alt, title, description, title2, description2, liveLink, liveText, videoLink, videoText, repoLink, repoText } = project;

    return <>
        <div class="gallary">
            <img src={img} alt={alt} />
            <div class="text">
                <h3><b>{title}</b></h3>
                <p>{description} </p>
                <br />
                {title2 &&
                    <>
                        <h3><b>{title2}</b></h3>
                        <p>{description2}</p>
                    </>
                }
                {liveLink &&
                    <h4>
                        <b>Live Link: </b>
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
                    <b>Repo Link: </b>
                    <a target="_blank" rel="noopener noreferrer" href={repoLink}>{repoText}</a>
                </h4>
            </div>
        </div>
    </>
}

export default GallaryItem;
