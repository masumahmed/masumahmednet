function ProjectFilter({filter}) {
    const handleFilter = (event) => {
        filter.setFilter(event.target.value);
    }

    return <div className="ProjectFilter">
    <div className="content">
        <div className="con" style={{ border: "1px solid rgb(58, 58, 58)", borderTop: "0px Solid" }}>
            <h4>Filter: </h4>
            <select className="selected" onChange={handleFilter}>
                <option selected value="*">All</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Frontend">Frontend</option>
                <option value="UI">UI</option>
                <option value="OS">OS</option>
                <option value="C++">C++</option>
                <option value="File Systems">File System</option>
            </select>
        </div>
    </div>
    </div>
}

export default ProjectFilter;
