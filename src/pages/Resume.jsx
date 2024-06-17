function Resume() {
    // if mobile client then redirect to https://docs.google.com/gview?embedded=true&url=<URL of a supported doc>
    // else redirect to /resume.pdf
    return <>
        <meta httpEquiv='refresh' content='0; URL=/resume.pdf'/>
    </>
}

export default Resume;
