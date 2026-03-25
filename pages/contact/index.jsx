import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Thank you! Your message has been sent successfully. I'll get back to you soon.");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Email send failed:", error.text);
        alert("Failed to send message. Please try again or email me directly at rs965198@gmail.com");
      })
      .finally(() => setIsLoading(false));
  };



  return (

    <div className="h-full bg-primary/30">

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">

        {/* text & form */}

        <div className="flex flex-col w-full max-w-[700px]">

          {/* text */}

          <motion.h2

            variants={fadeIn("up", 0.2)}

            initial="hidden"

            animate="show"

            exit="hidden"

            className="h2 text-center mb-12"

          >

            Let's <span className="text-accent">connect.</span>

          </motion.h2>



          {/* form */}
          <motion.form
            ref={formRef}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >

            {/* input group */}

            <div className="flex gap-x-6 w-full">

              <input type="hidden" name="form-name" value="contact" />



              <input

                type="text"

                name="name"

                placeholder="Name"

                className="input"

                disabled={isLoading}

                aria-disabled={isLoading}

                required

                aria-required

              />

              <input

                type="email"

                name="email"

                placeholder="E-mail"

                className="input"

                disabled={isLoading}

                aria-disabled={isLoading}

                required

                aria-required

              />

            </div>

            <input

              type="text"

              name="subject"

              placeholder="Subject"

              className="input"

              disabled={isLoading}

              aria-disabled={isLoading}

              required

              aria-required

            />

            <textarea

              name="message"

              placeholder="Message..."

              className="textarea"

              disabled={isLoading}

              aria-disabled={isLoading}

              required

              aria-required

            />

            <button

              type="submit"

              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"

              disabled={isLoading}

              aria-disabled={isLoading}

            >

              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">

                Let's talk

              </span>



              <BsArrowRight

                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"

                aria-hidden

              />

            </button>

          </motion.form>

        </div>

      </div>

    </div>

  );

};



export default Contact;

