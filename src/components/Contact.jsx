
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function Contact() {
  const socials = [
    {
      name: 'Instagram',
      username: 'b.yuuu0',
      icon: FaInstagram,
      color: 'text-pink-500',
      hover: 'hover:border-pink-300 hover:bg-pink-50',
      link: 'https://www.instagram.com/b.yuuu0?mdxt=MXA0OTRhbWV3MHd3OA==',
    },
    {
      name: 'WhatsApp',
      username: '+62 857-2216-2872',
      icon: FaWhatsapp,
      color: 'text-green-500',
      hover: 'hover:border-green-300 hover:bg-green-50',
      link: 'https://wa.me/6285722162872',
    },
    {
      name: 'LinkedIn',
      username: 'Connect with me',
      icon: FaLinkedin,
      color: 'text-blue-600',
      hover: 'hover:border-blue-300 hover:bg-blue-50',
      link: 'https://linkedin.com/in/usernamekamu',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-5 sm:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-[#FABE07]" />

            <span className="text-xs font-extrabold tracking-[0.2em] text-[#2283A6]">
              GET IN TOUCH
            </span>

            <span className="w-9 h-[2px] bg-[#FABE07]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#172B35]">
            Let's Connect <span className="text-[#2283A6]">Together.</span>
          </h2>

          <p className="text-[#647780] mt-5 max-w-xl mx-auto leading-relaxed">
            Tertarik untuk berdiskusi, berkolaborasi, atau sekadar
            menyapa? Hubungi saya melalui media sosial berikut.
          </p>
        </motion.div>

        {/* SOCIAL CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
                className={`
                  group relative overflow-hidden
                  bg-[#F6FCFC]
                  border border-[#DCE9EC]
                  rounded-3xl p-8
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${social.hover}
                `}
              >
                <div className="flex items-center justify-between mb-9">
                  <div className={`
                    w-16 h-16 rounded-2xl
                    bg-white border border-[#DCE9EC]
                    flex items-center justify-center
                    ${social.color}
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    <Icon size={34} />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-[#647780]
                      group-hover:text-[#2283A6]
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all duration-300
                    "
                  />
                </div>

                <h3 className="text-xl font-extrabold text-[#172B35]">
                  {social.name}
                </h3>

                <p className="text-sm text-[#647780] mt-2">
                  {social.username}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#2283A6]">
                  Connect with me
                  <ArrowUpRight size={16} />
                </div>

              </motion.a>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="w-14 h-[3px] bg-[#FABE07] mx-auto mb-6 rounded-full" />

          <h3 className="text-xl font-bold text-[#172B35]">
            Thank You for Visiting!
          </h3>

          <p className="text-sm text-[#647780] mt-3">
            Feel free to connect with me. See you around!
          </p>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-8 border-t border-[#DCE9EC] flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[#647780]">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-bold text-[#2283A6] hover:text-[#196985] transition-colors"
          >
            Back to Top ↑
          </a>
        </motion.div>

      </div>
    </section>
  );
}
