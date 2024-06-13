import Footer from '../components/Footer';
import Header from '../components/Header';
import GallaryItem from '../components/GallaryItem';
import ProjectData from './ProjectsData.json';

function Projects() {
    return <>
        <div id="bodyWrapper">
            <Header />
            <div id="project-wrapper">
                {ProjectData.map((project, index) => {
                    return <GallaryItem key={index} project={project} />
                })}
            </div>
        </div>
        <Footer />
    </>
}

export default Projects;
