import banner_desktop from "../../assets/banner_desktop.png";
import banner_mobile from "../../assets/banner_mobile.png";
import nataly_costa_cv from "../../assets/nataly_costa_cv.pdf";

import * as S from "./main_style";
import About from "./About/About";

export default function Main() {
  const handleDownload = () => {
    const url = nataly_costa_cv;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', nataly_costa_cv.pdf);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <S.Main>
        <section className="main-page">
          <div className="text">
            <h1>Nataly Costa</h1>
            <h2>I´m a <span></span></h2>

            <div className="networks">
              <a href="https://github.com/Nataly-Costaa" target="blanck"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/natalycosta-dev/" target="blanck"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            
            <button id="btn1" onClick={handleDownload}>Download CV</button>
            
          </div>

            <figure className="desktop_banner">
                <img src={banner_desktop} alt="Banner Nataly Costa" />
            </figure>
            <figure className="mobile_banner">
                <img src={banner_mobile} alt="Banner Nataly Costa" />
            </figure>

            <button id="btn2" onClick={handleDownload}>Download CV</button>
        </section>

        <About />
    </S.Main>
  )
}
