import { useEffect, useState } from "react";

function Modal() {
    const [image, setImage] = useState("");
    const [alt, setAlt] = useState("");

    useEffect(() => {
        const images = document.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("click", function () {
                setImage(images[i].src);
                setAlt(images[i].alt);
                display();
            });
        }
    }, []);

    const display = () => {
        let modal = document.getElementById("modal");
        let modalContainer = document.getElementById("modal-container");

        modal.classList.remove("invisible");
        modalContainer.classList.remove("invisible");

        modalContainer.addEventListener("click", function () {
            modal.classList.add("invisible");
            modalContainer.classList.add("invisible");
        });

        modal.addEventListener("click", function () {
            modal.classList.add("invisible");
            modalContainer.classList.add("invisible");
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "escape") {
                modal.classList.add("invisible");
                modalContainer.classList.add("invisible");
            }
        });
    }

    return <div>
        <div className="invisible" id="modal-container">
            <p id="tip">click anywhere or press ESC to close the image</p>
            <p id="caption">{alt}</p>
        </div>
        <div className="invisible" id="modal">
            <img id="modal-image" src={image} alt={alt} />
        </div>
    </div>
}

export default Modal;
