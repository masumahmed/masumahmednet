function ImageModal({ img }) {
    
    return <>
        <div className="" id="modal-container">
            <p id="tip">click anywhere to close the image</p>
        </div>

        <div className="" id="modal">
            <img id="modal-image" src={img} alt="" />
        </div>
    </>
}

export default ImageModal;
