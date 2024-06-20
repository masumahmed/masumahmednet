import { useEffect, useState } from "react";

function Modal({dependency}) {
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
    }, [dependency]);

    const display = () => {
        let modal = document.getElementById("modal");
        let modalContainer = document.getElementById("modal-container");

        modal.classList.remove("invisible");
        modalContainer.classList.remove("invisible");
        document.body.style.overflow = "hidden";

        modalContainer.addEventListener("click", function () {
            modal.classList.add("invisible");
            modalContainer.classList.add("invisible");
            document.body.style.overflow = "auto";
        });

        modal.addEventListener("click", function () {
            modal.classList.add("invisible");
            modalContainer.classList.add("invisible");
            document.body.style.overflow = "auto";
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modal.classList.add("invisible");
                modalContainer.classList.add("invisible");
                document.body.style.overflow = "auto";
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
