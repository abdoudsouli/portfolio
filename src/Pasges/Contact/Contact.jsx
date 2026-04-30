
import { useState,useEffect } from "react";
import { motion } from "motion/react"
import red from "../../assets/red.png";
import light from "../../assets/light.png";

export default function Contact() {

   const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

 const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark(); // أول مرة

    const observer = new MutationObserver(checkDark);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const image = isDark ? red : light;

  return (
    <motion.section
     initial={{
        y:'+5vw'
        }}
        animate={{
         y:0
        }}
        transition={{
         duration:1,
         delay:0.5
         }} 
    className=" flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg  px-8 space-y-6"
      >
              <img src={image} className="h-20 mx-auto" alt="" />
<h2 className="text-lg font-semibold text-center">
  Let’s Work Together
</h2>

<p className="text-gray-600 text-sm text-center mt-2">
  I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.  
  Send me a message and let’s build something great together.
</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white outline-none focus:ring-1 focus:ring-gray-700 dark:focus:ring-red-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white outline-none focus:ring-1 focus:ring-gray-700 dark:focus:ring-red-900"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white outline-none focus:ring-1 focus:ring-gray-700 dark:focus:ring-red-900 resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-red-900 text-gray-50 font-semibold hover:bg-gray-50 hover:text-red-900 transition ease-in-out duration-700 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  )
}
