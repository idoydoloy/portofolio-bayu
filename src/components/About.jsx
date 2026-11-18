import {
  UserRound,
  Code2,
  Lightbulb,
  Rocket,
} from 'lucide-react';

import profileImage from '../assets/Profile.jpeg';

export default function About() {
  const interests = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Membangun website modern, responsif, dan interaktif.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      desc: 'Mencari solusi melalui teknologi dan kreativitas.',
    },
    {
      icon: Rocket,
      title: 'Continuous Learning',
      desc: 'Terus belajar dan mengikuti perkembangan teknologi.',
    },
  ];

  return (
    <section
      id="about"
      className="portfolio-section bg-white overflow-hidden"
    >
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14">
          <span className="section-kicker">
            <span className="w-8 h-[2px] bg-[#FABE07]" />
            GET TO KNOW ME
          </span>

          <h2 className="section-title mt-4">
            About <span className="text-[#2283A6]">Me.</span>
          </h2>

          <p className="section-description mt-4 max-w-xl">
            Mengenal lebih dekat tentang diri saya,
            ketertarikan, dan perjalanan saya dalam dunia teknologi.
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="
          grid lg:grid-cols-2
          gap-10 sm:gap-12 lg:gap-16
          items-center
        ">

          {/* LEFT: DESCRIPTION */}
          <div>

            {/* INTRODUCTION */}
            <div className="flex items-center gap-3 mb-6">
              <div className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-xl bg-[#E5F3F8]
                flex items-center justify-center
                shrink-0
              ">
                <UserRound
                  size={23}
                  className="text-[#2283A6]"
                />
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl text-[#172B35]">
                  Who Am I?
                </h3>

                <p className="text-xs sm:text-sm text-[#647780]">
                  A little introduction about myself
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="
              text-[#647780]
              leading-[1.9]
              text-sm sm:text-base
              mb-5
            ">
              Saya adalah mahasiswa semester 1 Teknik Informatika
              Universitas Pamulang yang memiliki ketertarikan besar
              pada pengembangan perangkat lunak dan teknologi web.
              Saya juga merupakan lulusan SMK jurusan Rekayasa
              Perangkat Lunak (RPL).
            </p>

            <p className="
              text-[#647780]
              leading-[1.9]
              text-sm sm:text-base
              mb-8
            ">
              Di luar perkuliahan, saya aktif belajar secara mandiri
              dan membangun berbagai proyek menggunakan React.js,
              Tailwind CSS, Laravel, serta Express.js. Saya senang
              mempraktikkan kemampuan melalui pembuatan aplikasi
              nyata untuk mengembangkan kemampuan problem-solving.
            </p>

            {/* INTERESTS */}
            <div className="space-y-5 sm:space-y-6">

              {interests.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >

                    <div className="
                      w-11 h-11 shrink-0
                      rounded-xl bg-[#F6FCFC]
                      border border-[#DCE9EC]
                      flex items-center justify-center
                      group-hover:bg-[#E5F3F8]
                      group-hover:border-[#D0E8F0]
                      transition-all duration-300
                    ">
                      <Icon
                        size={21}
                        className="text-[#2283A6]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="
                        font-bold text-sm sm:text-base
                        text-[#172B35] mb-1
                      ">
                        {item.title}
                      </h4>

                      <p className="
                        text-xs sm:text-sm
                        text-[#647780] leading-relaxed
                      ">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* RIGHT: PROFILE CARD */}
          <div className="relative mt-3 lg:mt-0">

            {/* BACKGROUND DECORATION */}
            <div className="
              absolute -top-5 -right-5
              w-28 h-28
              bg-[#FABE07]/20
              rounded-full blur-2xl
            " />

            <div className="
              absolute -bottom-5 -left-5
              w-32 h-32
              bg-[#2283A6]/15
              rounded-full blur-2xl
            " />

            {/* PROFILE CARD */}
            <div className="
              relative portfolio-card
              p-5 sm:p-8 lg:p-10
              rounded-2xl sm:rounded-3xl
              overflow-hidden
            ">

              <div className="
                absolute top-0 right-0
                w-28 h-28 sm:w-32 sm:h-32
                bg-[#E5F3F8]
                rounded-bl-full
              " />

              <div className="relative z-10">

                {/* PROFILE PHOTO */}
                <div className="
                  relative mb-8
                  flex justify-center sm:justify-start
                ">

                  {/* DECORATIVE BACKGROUND */}
                  <div className="
                    absolute w-40 h-40
                    bg-[#E5F3F8]
                    rounded-full blur-2xl
                    -top-4 -left-3
                  " />

                  <div className="
                    absolute w-16 h-16
                    bg-[#FABE07]/30
                    rounded-full
                    top-0 left-28 sm:left-32
                  " />

                  {/* PHOTO */}
                  <div className="relative group">

                    <div className="
                      absolute -inset-2
                      rounded-[2rem]
                      border-2 border-[#2283A6]/20
                      rotate-6
                      group-hover:rotate-3
                      transition-transform duration-500
                    " />

                    <div className="
                      relative
                      w-40 h-48
                      sm:w-48 sm:h-56
                      rounded-[1.7rem]
                      overflow-hidden
                      border-4 border-white
                      shadow-xl shadow-[#2283A6]/15
                    ">
                      <img
                        src={profileImage}
                        alt="Foto Profil Bayu Saputra"
                        className="
                          w-full h-full
                          object-cover object-center
                          group-hover:scale-110
                          transition-transform duration-700
                        "
                      />
                    </div>

                    {/* STATUS LABEL */}
                    <div className="
                      absolute -bottom-4 -right-3
                      sm:-right-4
                      bg-white
                      px-3 sm:px-4 py-3
                      rounded-xl shadow-lg
                      border border-[#DCE9EC]
                      flex items-center gap-2
                    ">
                      <span className="
                        w-2 h-2 shrink-0
                        rounded-full bg-green-500
                      " />

                      <span className="
                        text-[10px] sm:text-xs
                        font-bold text-[#172B35]
                        whitespace-nowrap
                      ">
                        AVAILABLE TO LEARN
                      </span>
                    </div>

                  </div>
                </div>

                {/* PROFILE INFORMATION */}
                <span className="text-xs sm:text-sm font-bold text-[#2283A6]">
                  PERSONAL PROFILE
                </span>

                <h3 className="
                  text-2xl sm:text-3xl
                  font-extrabold text-[#172B35]
                  mt-3 mb-3
                ">
                  Bayu Saputra
                </h3>

                <p className="
                  text-sm sm:text-base
                  text-[#647780]
                  leading-relaxed mb-7 sm:mb-8
                ">
                  Mahasiswa Teknik Informatika dan Web Developer
                  yang memiliki minat dalam membangun solusi digital
                  melalui teknologi web.
                </p>

                {/* PROFILE DETAILS */}
                <div className="
                  border-t border-[#DCE9EC]
                  pt-5 sm:pt-6
                  space-y-4
                ">

                  <div className="
                    flex flex-col min-[400px]:flex-row
                    min-[400px]:justify-between
                    gap-1 min-[400px]:gap-4
                  ">
                    <span className="text-xs sm:text-sm text-[#647780]">
                      Education
                    </span>

                    <span className="
                      text-xs sm:text-sm
                      font-bold text-[#172B35]
                    ">
                      Universitas Pamulang
                    </span>
                  </div>

                  <div className="
                    flex flex-col min-[400px]:flex-row
                    min-[400px]:justify-between
                    gap-1 min-[400px]:gap-4
                  ">
                    <span className="text-xs sm:text-sm text-[#647780]">
                      Focus
                    </span>

                    <span className="
                      text-xs sm:text-sm
                      font-bold text-[#172B35]
                    ">
                      Frontend Development
                    </span>
                  </div>

                  <div className="
                    flex flex-col min-[400px]:flex-row
                    min-[400px]:justify-between
                    gap-1 min-[400px]:gap-4
                  ">
                    <span className="text-xs sm:text-sm text-[#647780]">
                      Technology
                    </span>

                    <span className="
                      text-xs sm:text-sm
                      font-bold text-[#172B35]
                    ">
                      React & JavaScript
                    </span>
                  </div>

                  <div className="
                    flex flex-col min-[400px]:flex-row
                    min-[400px]:justify-between
                    gap-1 min-[400px]:gap-4
                  ">
                    <span className="text-xs sm:text-sm text-[#647780]">
                      Interest
                    </span>

                    <span className="
                      text-xs sm:text-sm
                      font-bold text-[#172B35]
                    ">
                      Web Technology
                    </span>
                  </div>

                </div>

                {/* MOTIVATION */}
                <div className="
                  mt-7 sm:mt-8
                  p-4
                  rounded-xl
                  bg-[#FFF8E5]
                  border border-[#FBE7A5]
                ">
                  <p className="
                    text-xs sm:text-sm
                    text-[#8A6500]
                    font-semibold leading-relaxed
                  ">
                    "Keep learning, keep growing, and keep creating."
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
