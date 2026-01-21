
import { useState } from "react";
import { motion } from "motion/react"
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

  return (
    <motion.section
     initial={{
        scale:0.5
        }}
        animate={{
         scale:1
        }}
        transition={{
         duration:0.6,
         delay:0.2
         }}
    className=" flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg  p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold  text-center">
          Do you have any questions? I will answer them ,Connect with me
        </h2>
        <p className='text-gray-600 dark:text-xs text-center'>d love to hear from you! If you have any questions, comments or feedback, please use the form below. </p>
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
