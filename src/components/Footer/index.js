import './index.css'

const Footer = () => (
  <div className="footer-div">
    <div className="icons-div">
      <div className="footer-icons-div">
        <img
          src="https://res.cloudinary.com/deq8p5pmi/image/upload/v1704377098/ph_instagram-logo-fill_n3fq7y.png"
          alt="instagram"
          width="30px"
          height="30px"
          className="footer-image"
        />
        <img
          src="https://res.cloudinary.com/deq8p5pmi/image/upload/v1704377222/bi_linkedin_cl5zgt.png"
          alt="linkedin"
          width="30px"
          height="30px"
          className="footer-image"
        />
        <img
          src="https://res.cloudinary.com/deq8p5pmi/image/upload/v1704377154/bi_envelope-fill_dghuie.png"
          alt="email"
          width="30px"
          height="30px"
          className="footer-image"
        />
      </div>
    </div>
    <p className="footer-p">Copyright © 2024. All rights reserved</p>
    <img
      src="https://res.cloudinary.com/deq8p5pmi/image/upload/v1704376940/Vector_mh13pw.png"
      width="100%"
      alt="footer"
      height="100px"
    />
  </div>
)

export default Footer
