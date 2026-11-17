import { UserRound, Code2, Lightbulb, Rocket } from 'lucide-react';
import profileImage from '../assets/Profile.jpeg';

export default function About() {
  const interests = [
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Membangun website modern dan responsif.',
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
    <section id="about" className="portfolio-section bg-white">
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="mb-14">
          <span className="section-kicker">
            <span className="w-8 h-[2px] bg-[#FABE07]" />
            GET TO KNOW ME
          </span>

          <h2 className="section-title mt-4">
            About <span className="text-[#2283A6]">Me.</span>
          </h2>

          <p className="section-description mt-4 max-w-xl">
            Mengenal lebih dekat tentang diri saya, ketertarikan, dan perjalanan saya dalam dunia teknologi. 
            Saat ini saya merupakan mahasiswa semester 1 jurusan Teknik Informatika Universitas Pamulang (UNPAM) yang memiliki ketertarikan besar pada pengembangan perangkat lunak dan teknologi web. Di luar materi perkuliahan,
             saya aktif belajar secara mandiri dan membangun berbagai proyek nyata menggunakan React.js, Tailwind CSS, serta backend Express.js. 
            Bagi saya, langsung mempraktikkan kode lewat pembuatan aplikasi—seperti sistem pemesanan tiket maupun manajemen parkir pintar—adalah cara terbaik untuk mempertajam kemampuan problem-solving sejak dini.
</p>
<p className="text-slate-400 leading-relaxed">
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: DESCRIPTION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#E5F3F8] flex items-center justify-center">
                <UserRound size={24} className="text-[#2283A6]" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#172B35]">
                  Who Am I?
                </h3>
                <p className="text-sm text-[#647780]">
                  A little introduction about myself
                </p>
              </div>
            </div>

            <p className="text-[#647780] leading-[1.9] text-base mb-5">
              Saya adalah mahasiswa Universitas Pamulang yang memiliki
              ketertarikan tinggi pada pengembangan web.
              Saya senang mengubah desain menjadi kode yang
              rapi menggunakan ekosistem React.
            </p>

            <p className="text-[#647780] leading-[1.9] text-base mb-8">
              Bagi saya, pengembangan web bukan hanya tentang
              menulis kode, tetapi juga bagaimana menciptakan
              pengalaman pengguna yang nyaman, menarik,
              dan mudah digunakan.
            </p>

            {/* INTERESTS */}
            <div className="space-y-4">
              {interests.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F6FCFC] border border-[#DCE9EC] flex items-center justify-center group-hover:bg-[#E5F3F8] transition-colors">
                      <Icon size={21} className="text-[#2283A6]" />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#172B35] mb-1">
                        {item.title}
                      </h4>

                      <p className="text-sm text-[#647780] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: PROFILE CARD */}
          <div className="relative">

            <div className="absolute -top-5 -right-5 w-28 h-28 bg-[#FABE07]/20 rounded-full blur-2xl" />

            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#2283A6]/15 rounded-full blur-2xl" />

            <div className="relative portfolio-card p-7 sm:p-10 overflow-hidden">

              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5F3F8] rounded-bl-full" />

              <div className="relative z-10">

               
                {/* PROFILE PHOTO */}
                <div className="relative mb-8 flex justify-center sm:justify-start">

                  {/* Decorative background */}
                  <div className="absolute w-40 h-40 bg-[#E5F3F8] rounded-full blur-2xl -top-4 -left-3" />

                  <div className="absolute w-16 h-16 bg-[#FABE07]/30 rounded-full top-0 left-28 sm:left-32" />

                  {/* Photo container */}
                  <div className="relative group">

                    <div className="absolute -inset-2 rounded-[2rem] border-2 border-[#2283A6]/20 rotate-6 group-hover:rotate-3 transition-transform duration-500" />

                    <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-[1.7rem] overflow-hidden border-4 border-white shadow-xl shadow-[#2283A6]/15">
                      <img
                  src={profileImage}
                  alt="Foto Profil Bayu Saputra"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                    </div>

                    {/* Status label */}
                    <div className="absolute -bottom-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-[#DCE9EC] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="text-xs font-bold text-[#172B35]">
                        AVAILABLE TO LEARN
                      </span>
                    </div>

                  </div>
                </div>

                <span className="text-sm font-bold text-[#2283A6]">
                  PERSONAL PROFILE
                </span>

                <h3 className="text-3xl font-extrabold text-[#172B35] mt-3 mb-3">
                  Bayu Saputra
                </h3>

                <p className="text-[#647780] leading-relaxed mb-8">
                  Frontend Web Developer yang memiliki
                  minat dalam membangun solusi digital
                  melalui teknologi web.
                </p>

                <div className="border-t border-[#DCE9EC] pt-6 space-y-4">

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-[#647780]">Focus</span>
                    <span className="text-sm font-bold text-[#172B35]">
                      Frontend Development
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-[#647780]">Technology</span>
                    <span className="text-sm font-bold text-[#172B35]">
                      React & JavaScript
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-sm text-[#647780]">Interest</span>
                    <span className="text-sm font-bold text-[#172B35]">
                      Web Technology
                    </span>
                  </div>

                </div>

                <div className="mt-8 p-4 rounded-xl bg-[#FFF8E5] border border-[#FBE7A5]">
                  <p className="text-sm text-[#8A6500] font-semibold">
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