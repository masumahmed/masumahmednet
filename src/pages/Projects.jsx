import { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import GallaryItem from '../components/GallaryItem';
import ProjectData from '../data/ProjectsData.json';
import ProjectFilter from '../components/ProjectFilter';
import Modal from '../components/Modal';

function Projects() {
    const [filter, setFilter] = useState("*");
        
        return <>
        <div id="bodyWrapper">
            <Modal />
            <Header />
            <ProjectFilter filter={{filter, setFilter}} />
            <div id="project-wrapper">
                {ProjectData.map((project, index) => {
                    if (filter == "*" || project.tags.includes(filter))
                        return <GallaryItem key={index} project={project} />
                })}
            </div>
        </div>
        <Footer />
    </>
}

export default Projects;
