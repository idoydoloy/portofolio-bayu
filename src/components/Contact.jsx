import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      link: 'https://www.instagram.com/b.yuuu0/',
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
      className="portfolio-section bg-white overflow-hidden"
    >
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-14"
        >

          <div className="
            flex items-center justify-center
            gap-3 mb-4
          ">
            <span className="w-7 sm:w-9 h-[2px] bg-[#FABE07]" />

            <span className="
              text-[10px] sm:text-xs
              font-extrabold tracking-[0.2em]
              text-[#2283A6]
            ">
              GET IN TOUCH
            </span>

            <span className="w-7 sm:w-9 h-[2px] bg-[#FABE07]" />
          </div>

          <h2 className="
            text-3xl sm:text-4xl lg:text-5xl
            font-extrabold text-[#172B35]
            leading-tight
          ">
            Let's Connect{' '}
            <span className="text-[#2283A6]">
              Together.
            </span>
          </h2>

          <p className="
            text-sm sm:text-base
            text-[#647780]
            mt-4 sm:mt-5
            max-w-xl mx-auto
            leading-relaxed
          ">
            Tertarik untuk berdiskusi, berkolaborasi,
            atau sekadar menyapa? Hubungi saya melalui
            media sosial berikut.
          </p>

        </motion.div>

        {/* SOCIAL CARDS */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2 lg:grid-cols-3
          gap-4 sm:gap-6
        ">

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
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.12 }}
                className={`
                  group relative overflow-hidden
                  bg-[#F6FCFC]
                  border border-[#DCE9EC]
                  rounded-2xl sm:rounded-3xl
                  p-5 sm:p-7 lg:p-8
                  transition-all duration-300
                  hover:-translate-y-1 sm:hover:-translate-y-2
                  hover:shadow-xl
                  hover:shadow-[#2283A6]/10
                  ${social.hover}
                `}
              >

                {/* CARD HEADER */}
                <div className="
                  flex items-center justify-between
                  mb-6 sm:mb-8
                ">

                  <div className={`
                    w-12 h-12 sm:w-16 sm:h-16
                    rounded-xl sm:rounded-2xl
                    bg-white border border-[#DCE9EC]
                    flex items-center justify-center
                    ${social.color}
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    <Icon size={28} className="sm:hidden" />
                    <Icon size={34} className="hidden sm:block" />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="
                      text-[#647780]
                      group-hover:text-[#2283A6]
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all duration-300
                    "
                  />

                </div>

                {/* CARD CONTENT */}
                <h3 className="
                  text-lg sm:text-xl
                  font-extrabold text-[#172B35]
                ">
                  {social.name}
                </h3>

                <p className="
                  text-xs sm:text-sm
                  text-[#647780]
                  mt-2
                ">
                  {social.username}
                </p>

                {/* ACTION */}
                <div className="
                  mt-5 sm:mt-7
                  flex items-center gap-2
                  text-xs sm:text-sm
                  font-bold text-[#2283A6]
                ">
                  Connect with me
                  <ArrowUpRight size={15} />
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
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >

          <div className="
            w-12 sm:w-14 h-[3px]
            bg-[#FABE07]
            mx-auto mb-5 sm:mb-6
            rounded-full
          " />

          <h3 className="
            text-lg sm:text-xl
            font-bold text-[#172B35]
          ">
            Thank You for Visiting!
          </h3>

          <p className="
            text-xs sm:text-sm
            text-[#647780]
            mt-3
          ">
            Feel free to connect with me. See you around!
          </p>

        </motion.div>

        {/* FOOTER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mt-14 sm:mt-20
            pt-6 sm:pt-8
            border-t border-[#DCE9EC]
            flex flex-col sm:flex-row
            justify-between items-center
            gap-4
          "
        >

          <p className="
            text-xs sm:text-sm
            text-[#647780]
            text-center sm:text-left
          ">
            © {new Date().getFullYear()} Bayu Saputra.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="
              text-xs sm:text-sm
              font-bold text-[#2283A6]
              hover:text-[#196985]
              transition-colors
            "
          >
            Back to Top ↑
          </a>

        </motion.div>

      </div>
    </section>
  );
}
