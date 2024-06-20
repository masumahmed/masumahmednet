import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal';

function Photos() {
    return <>
        <Modal />
        <div id="bodyWrapper">
            <Header />
            <div className="content">
                <div className="con border">
                    <br />
                    <center>
                        <img className="photoGallary" src="assets/img/20190124_164902.jpg" alt="Central Park fall trees" />
                        <img className="photoGallary" src="assets/img/20190220_123851-01.jpeg"
                            alt="Hunter College skybridge 7th floor view over Lexington Avenue" />
                        <img className="photoGallary" src="assets/img/hardware.jpg" alt="My first PC build" />
                        <img className="photoGallary" src="assets/img/21041663_175942966283842_2501198213692784640_n.jpg"
                            alt="Solar Eclipse, New York, 2017" />
                        <img className="photoGallary" src="assets/img/PXL_20220325_011330341.NIGHT.jpg" alt="my clubroom workstation" />
                    </center>
                    <br />
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Photos;
