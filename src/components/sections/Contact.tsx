import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { github, linkedin } from "../../assets";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // If EmailJS credentials are not set, gracefully fallback to mailto
    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.accessToken
    ) {
      window.location.href = `mailto:${config.html.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      setLoading(false);
      setStatusMessage("Launched your email client to deliver message directly!");
      setForm(INITIAL_STATE);
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage("Thank you! Your message has been sent successfully.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          window.location.href = `mailto:${config.html.email}?subject=${encodeURIComponent(
            `Portfolio Contact from ${form.name}`
          )}&body=${encodeURIComponent(form.message)}`;
          setStatusMessage("Message directed to default email client.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 border border-white/5"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 font-medium text-white text-[14px]">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  required
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border border-white/5 px-5 py-3.5 font-medium text-white outline-none focus:border-[#915EFF] transition-colors"
                  {...(input === "message" && { rows: 5 })}
                />
              </label>
            );
          })}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#915EFF] to-[#7038e8] shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:scale-105 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
            {statusMessage && (
              <span className="text-[13px] text-[#00cea8] font-medium">
                {statusMessage}
              </span>
            )}
          </div>
        </form>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-secondary text-[14px] mb-4">Direct Contact &amp; Profiles:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div
              onClick={() => copyToClipboard(config.html.email)}
              className="flex items-center justify-between rounded-xl bg-tertiary/70 p-3 text-[13px] text-white hover:bg-tertiary transition-colors cursor-pointer border border-white/5 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[18px]">📧</span>
                <div>
                  <p className="text-[11px] text-secondary">Email (Click to copy)</p>
                  <p className="font-medium text-white truncate max-w-[180px]">{config.html.email}</p>
                </div>
              </div>
              <span className="text-[11px] text-[#915EFF] font-semibold">
                {copiedEmail ? "Copied!" : "Copy"}
              </span>
            </div>

            <a
              href={`tel:${config.html.phone}`}
              className="flex items-center gap-3 rounded-xl bg-tertiary/70 p-3 text-[13px] text-white hover:bg-tertiary transition-colors border border-white/5"
            >
              <span className="text-[18px]">📞</span>
              <div>
                <p className="text-[11px] text-secondary">Phone</p>
                <p className="font-medium text-white">{config.html.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl bg-tertiary/70 p-3 text-[13px] text-white border border-white/5">
              <span className="text-[18px]">📍</span>
              <div>
                <p className="text-[11px] text-secondary">Location</p>
                <p className="font-medium text-white">{config.html.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-tertiary/70 p-3 text-[13px] text-white border border-white/5">
              <span className="text-[18px]">🎓</span>
              <div>
                <p className="text-[11px] text-secondary">Education</p>
                <p className="font-medium text-white text-[12px]">B.E. CSE, EASA College (2027)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={config.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-tertiary px-4 py-2 text-[14px] text-white transition-colors hover:bg-[#915EFF] border border-white/5"
            >
              <img src={github} alt="GitHub" className="h-5 w-5 object-contain" />
              GitHub Profile
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#0077b5] px-4 py-2 text-[14px] text-white transition-all hover:brightness-110"
            >
              <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-contain" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
