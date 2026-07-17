import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section container" id="contact">
      <div className="contact-header contact-text-animate">
        <h2 className="contact-title">
          Contact <span className="highlight">Me</span>
        </h2>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-8">
          <form className="contact-form contact-form-animate">
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control custom-input" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control custom-input" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control custom-input" id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn custom-btn mt-3 px-5">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}