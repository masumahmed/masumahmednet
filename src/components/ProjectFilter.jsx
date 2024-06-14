import Pills from "./Pills";

function ProjectFilter() {
    return <div className="ProjectFilter">
    <div className="content">
        <div className="con" style={{ border: "1px solid rgb(58, 58, 58)", borderTop: "0px Solid" }}>
            <h4>Filter: </h4>
            <select name="cars" id="cars">
                <option value="fullstack">Fullstack</option>
                <option value="">Frontend</option>
                <option value="ui">UI</option>
                <option value="os">OS</option>
                <option value="c++">C++</option>
                <option value="fileSystem">File System</option>
            </select>
            <h4 className="selectedFilters"></h4>
        </div>
    </div>
    </div>
}

export default ProjectFilter;
