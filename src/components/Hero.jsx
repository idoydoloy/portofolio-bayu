import { ArrowUpRight, Download, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-[#F6FCFC]
        pt-24 pb-28 px-4
        sm:pt-28 sm:pb-16 sm:px-6
        lg:px-10
        overflow-hidden
      "
    >

      {/* BACKGROUND DECORATION */}
      <div className="absolute top-32 right-[-100px] w-80 h-80 bg-[#2283A6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[-100px] w-72 h-72 bg-[#FABE07]/10 rounded-full blur-3xl" />

      <div className="
        max-w-7xl mx-auto w-full
        grid lg:grid-cols-2
        gap-12 sm:gap-16
        items-center relative z-10
      ">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* INTRO BADGE */}
          <div className="
            inline-flex items-center gap-2
            px-3 sm:px-4 py-2
            bg-[#E5F3F8] border border-[#D0E8F0]
            rounded-full mb-6 sm:mb-7
          ">
            <span className="w-2 h-2 bg-[#FABE07] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#2283A6]">
              Welcome to My Portfolio
            </span>
          </div>

          {/* GREETING */}
          <p className="text-[#2283A6] font-bold text-base sm:text-lg mb-3">
            Halo, perkenalkan saya
          </p>

          {/* NAME */}
          <h1 className="
            text-4xl min-[380px]:text-5xl
            sm:text-6xl lg:text-7xl
            font-extrabold tracking-tight
            text-[#172B35]
            leading-[1.1]
            mb-5 sm:mb-6
          ">
            Bayu
            <span className="block text-[#2283A6]">
              Saputra<span className="text-[#FABE07]">.</span>
            </span>
          </h1>

          {/* PROFESSION */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#647780] mb-4 sm:mb-5">
            Frontend Web Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="
            text-[#647780]
            text-sm sm:text-base md:text-lg
            leading-relaxed
            max-w-xl mx-auto lg:mx-0
            mb-7 sm:mb-9
          ">
            Saya berfokus membangun website modern, responsif,
            dan interaktif dengan memperhatikan desain,
            pengalaman pengguna, serta kualitas kode.
          </p>

          {/* BUTTONS */}
          <div className="
            flex flex-col sm:flex-row flex-wrap
            justify-center lg:justify-start
            gap-3 sm:gap-4
          ">

            {/* PROJECT BUTTON */}
            <a
              href="#projects"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                px-5 sm:px-6 py-3.5
                bg-[#2283A6] text-white
                rounded-xl font-bold text-sm
                shadow-lg shadow-[#2283A6]/20
                hover:bg-[#196985] hover:-translate-y-1
                transition-all duration-300
              "
            >
              Lihat Project
              <ArrowUpRight size={18} />
            </a>

            {/* DOWNLOAD CV BUTTON */}
            <a
              href="/CV-Bayu-Saputra.pdf"
              download="CV-Bayu-Saputra.pdf"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                px-5 sm:px-6 py-3.5
                bg-[#FABE07] text-[#172B35]
                rounded-xl font-bold text-sm
                shadow-lg shadow-[#FABE07]/20
                hover:bg-[#E5AA00] hover:-translate-y-1
                transition-all duration-300
              "
            >
              Download CV
              <Download size={18} />
            </a>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                px-5 sm:px-6 py-3.5
                bg-white border border-[#DCE9EC]
                text-[#2283A6] rounded-xl
                font-bold text-sm
                hover:border-[#2283A6] hover:-translate-y-1
                transition-all duration-300
              "
            >
              Hubungi Saya
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* SMALL LABEL */}
          <div className="
            mt-8 sm:mt-12
            flex items-center justify-center lg:justify-start
            gap-3 text-xs sm:text-sm text-[#647780]
          ">
            <div className="w-8 sm:w-10 h-[2px] bg-[#FABE07]" />
            <span>Explore my work and creativity</span>
          </div>

        </div>

        {/* RIGHT VISUAL - HIDDEN ON MOBILE */}
        <div className="hidden lg:flex relative justify-center items-center">

          {/* OUTER CIRCLE */}
          <div className="
            relative
            w-[250px] h-[250px]
            min-[380px]:w-[280px] min-[380px]:h-[280px]
            sm:w-[360px] sm:h-[360px]
            lg:w-[420px] lg:h-[420px]
          ">

            <div className="
              absolute inset-0 rounded-full
              border-2 border-dashed border-[#2283A6]/30
              animate-[spin_30s_linear_infinite]
            " />

            <div className="
              absolute inset-4 sm:inset-5
              rounded-full bg-[#E5F3F8]
              border border-[#D0E8F0]
            " />

            {/* CENTER VISUAL */}
            <div className="
              absolute inset-8 sm:inset-10
              rounded-full
              bg-gradient-to-br from-[#2283A6] to-[#176985]
              flex items-center justify-center
              shadow-2xl shadow-[#2283A6]/25
              overflow-hidden
            ">

              <div className="
                absolute w-40 h-40 sm:w-52 sm:h-52
                bg-white/10 rounded-full
                -top-12 -right-8 sm:-top-16 sm:-right-10
              " />

              <div className="relative text-center text-white">
                <Code2
                  size={65}
                  strokeWidth={1.2}
                  className="mx-auto mb-3 sm:mb-4 sm:w-[85px] sm:h-[85px]"
                />

                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
                  Developer
                </p>

                <p className="text-xs sm:text-sm text-white/75 mt-2">
                  Creative & Innovative
                </p>
              </div>

            </div>

            {/* FLOATING BADGE */}
            <div className="
              absolute top-5 -right-2
              sm:top-8 sm:right-0
              bg-white rounded-xl sm:rounded-2xl
              shadow-xl border border-[#DCE9EC]
              p-2.5 sm:p-4
              flex items-center gap-2 sm:gap-3
              animate-bounce [animation-duration:3s]
            ">

              <div className="
                w-8 h-8 sm:w-10 sm:h-10
                bg-[#FFF5D6] rounded-lg sm:rounded-xl
                flex items-center justify-center
              ">
                <Sparkles size={19} className="text-[#D99D00] sm:w-[22px] sm:h-[22px]" />
              </div>

              <div>
                <p className="text-[10px] sm:text-xs text-[#647780]">
                  Passion
                </p>

                <p className="text-xs sm:text-sm font-bold text-[#172B35]">
                  Web Development
                </p>
              </div>
            </div>

            {/* FLOATING DECORATION */}
            <div className="
              absolute bottom-7 -left-2
              sm:bottom-10 sm:left-0
              bg-white p-3 sm:p-4
              rounded-xl sm:rounded-2xl
              shadow-xl border border-[#DCE9EC]
            ">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FABE07] rounded-full" />

                <span className="text-xs sm:text-sm font-bold text-[#172B35]">
                  Keep Learning
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}