
import {
  ShoppingCart,
  CloudSun,
  FolderCode,
  ArrowUpRight,
  Code2,
  Film,
  Car,
} from 'lucide-react';

export default function Projects() {
 const projects = [
  {
    number: '01',
    title: 'Cine Pula',
    desc: 'Website sistem pemesanan tiket bioskop secara real-time dengan fitur pemilihan kursi interaktif, jadwal tayang film, dan konfirmasi tiket instan.',
    tech: ['Laravel', 'Tailwind CSS', 'Mysql'],
    icon: Film,
    category: 'Web Application',
    color: 'bg-[#E5F3F8]',
    link: 'https://github.com/username/cine-pula',
  },
  {
    number: '02',
    title: 'Smart Parking',
    desc: 'Website sistem manajemen dan pemantauan ketersediaan slot parkir secara otomatis menggunakan backend Express.js untuk pencatatan kendaraan masuk dan keluar secara efisien.',
    tech: ['JavaScript', 'Express.js', 'Node.js', 'REST API'],
    icon: Car,
    category: 'Fullstack Web',
    color: 'bg-[#FFF8E5]',
    link: 'https://unpam-smart-parking.vercel.app/',
  },
];



  return (
    <section id="projects" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-[#FABE07]" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#2283A6]">
              MY CREATIVE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B35]">
            Featured <span className="text-[#2283A6]">Projects.</span>
          </h2>

          <p className="text-[#647780] mt-5 max-w-xl leading-relaxed">
            Beberapa project yang saya kerjakan sebagai bentuk
            penerapan kemampuan dan eksplorasi teknologi web.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group bg-white border border-[#DCE9EC] rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2283A6]/10 transition-all duration-300"
              >

                {/* VISUAL AREA */}
                <div className={`relative h-60 sm:h-72 ${project.color} flex items-center justify-center overflow-hidden`}>

                  <span className="absolute top-6 left-7 text-xs font-extrabold tracking-widest text-[#647780]/70">
                    PROJECT / {project.number}
                  </span>

                  <div className="absolute w-64 h-64 border border-[#2283A6]/10 rounded-full group-hover:scale-125 transition-transform duration-700" />

                  <div className="absolute w-48 h-48 border border-[#2283A6]/15 rounded-full group-hover:scale-125 transition-transform duration-700" />

                  <div className="relative w-28 h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500">
                    <Icon
                      size={52}
                      strokeWidth={1.5}
                      className="text-[#2283A6]"
                    />
                  </div>

                  <span className="absolute bottom-6 right-7 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-[#647780]">
                    {project.category}
                  </span>

                </div>

                {/* PROJECT INFORMATION */}
                <div className="p-7 sm:p-9">

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold tracking-widest text-[#2283A6]">
                      PROJECT {project.number}
                    </span>

                    <FolderCode
                      size={21}
                      className="text-[#FABE07]"
                    />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#172B35] mb-4 group-hover:text-[#2283A6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#647780] leading-7 mb-7">
                    {project.desc}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-lg bg-[#F6FCFC] border border-[#DCE9EC] text-xs font-bold text-[#647780]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                 
                  {/* PROJECT LINK */}
                  <div className="mt-8 pt-6 border-t border-[#DCE9EC] flex items-center justify-between gap-3">

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#647780]">
                      <Code2 size={17} />
                      Project Details
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2283A6] text-white text-xs font-bold hover:bg-[#196985] hover:-translate-y-1 transition-all duration-300"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </a>

                  </div>
                </div>
              </article>
            );
          })}

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#F6FCFC] border border-[#DCE9EC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-[#172B35]">
              Have a project in mind?
            </h3>

            <p className="text-sm text-[#647780] mt-2">
              Mari berdiskusi dan berkolaborasi bersama.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2283A6] text-white font-bold text-sm hover:bg-[#196985] hover:-translate-y-1 transition-all"
          >
            Let's Collaborate
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
