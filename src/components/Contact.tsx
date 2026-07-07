import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile, socials } from "../data/portfolio";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const inputClass = (field: keyof Errors) =>
    `floating-input peer w-full rounded-xl border-2 bg-surface px-4 py-4 text-heading transition-colors focus:outline-none ${
      errors[field]
        ? "border-red-400/70 focus:border-red-400"
        : "border-border focus:border-accent"
    }`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        index="07."
        title="Get in touch"
        subtitle="I'm currently open to new opportunities and collaborations. Have a project in mind, or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Info */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <a
              href={socials.email}
              className="card card-hover flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-xl text-accent">
                <FiMail />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="text-heading">{profile.email}</span>
              </span>
            </a>
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-xl text-accent">
                <FiMapPin />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">
                  Location
                </span>
                <span className="text-heading">{profile.location}</span>
              </span>
            </div>
            <div className="card flex items-center gap-4 p-5">
              <span className="text-sm text-muted">Find me on</span>
              <div className="ml-auto flex items-center gap-4 text-2xl text-text">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card space-y-6 p-6 sm:p-8">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              <label htmlFor="name" className="floating-label">
                Your name
              </label>
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <label htmlFor="email" className="floating-label">
                Your email
              </label>
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                className={`${inputClass("message")} resize-none`}
              />
              <label htmlFor="message" className="floating-label">
                Your message
              </label>
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full sm:w-auto"
            >
              {sent ? (
                <>
                  <FiCheckCircle /> Message ready — check your mail app
                </>
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
