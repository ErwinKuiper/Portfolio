import styles from "./Contact.module.css";
import { useState } from "react";

import { FaRegEnvelope } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const email = "erwin.kuiper@hotmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "463dd6a7-baaa-46e3-bfa8-f2d871eb3371");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => setResult(""), 5000);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  function handleCopy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <h1 className={styles.contactTitle}>Get in Touch</h1>
          <p className={styles.contactDescription}>
            I am always open to new opportunities and collaborations. Whether
            you have a project in mind, want to discuss potential partnerships,
            or simply want to say hello, feel free to reach out. I look forward
            to connecting with you!
          </p>

          <div className={styles.contactLinks}>
            <div className={styles.contactItem}>
              <FaRegEnvelope className={styles.contactIcon} />
              <div className={styles.contactText}>
                <p>{email}</p>
                <button className={styles.copyButton} onClick={handleCopy}>
                  {copied ? (
                    "Copied!"
                  ) : (
                    <>
                      {" "}
                      <FaCopy /> Copy{" "}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaLinkedin className={styles.contactIcon} />
              <div className={styles.contactText}>
                <p>Erwin Kuiper</p>
                <button
                  className={styles.copyButton}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/erwin-kuiper-447818222/",
                      "_blank",
                    )
                  }
                >
                  <LiaExternalLinkSquareAltSolid className={styles.openIcon} />{" "}
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h1 className={styles.contactTitle}>Or Send a Message</h1>

          <form className={styles.formGroup} onSubmit={onSubmit}>
            <div className={styles.formTopRow}>
              <input
                className={styles.normalInput}
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className={styles.normalInput}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className={styles.bigInput}
              name="message"
              placeholder="Message"
              required
            />
            <button className={styles.copyButton} type="submit">
              Submit Form
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
