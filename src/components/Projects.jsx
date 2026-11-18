import {
  FolderCode,
  ArrowUpRight,
  Code2,
  Film,
  Car,
  ExternalLink,
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Cine Pula',
      desc: 'Website sistem pemesanan tiket bioskop dengan fitur pemilihan kursi interaktif, jadwal tayang film, dan konfirmasi tiket.',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
      icon: Film,
      category: 'Web Application',
      color: 'bg-[#E5F3F8]',
      github: '',
      demo: '',
    },
    {
      number: '02',
      title: 'Smart Parking',
      desc: 'Website sistem manajemen dan pemantauan kapasitas parkir kampus dengan backend Express.js untuk pengelolaan data parkir.',
      tech: ['JavaScript', 'Express.js', 'Node.js', 'REST API'],
      icon: Car,
      category: 'Fullstack Web',
      color: 'bg-[#FFF8E5]',
      github: '',
      demo: 'https://unpam-smart-parking.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-[#FABE07]" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#2283A6]">
              MY CREATIVE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B35]">
            Featured <span className="text-[#2283A6]">Projects.</span>
          </h2>

          <p className="text-[#647780] mt-5 max-w-xl leading-relaxed text-sm sm:text-base">
            Beberapa project yang saya kerjakan sebagai bentuk
            penerapan kemampuan dan eksplorasi teknologi web.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group bg-white border border-[#DCE9EC] rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2283A6]/10 transition-all duration-300"
              >

                {/* VISUAL AREA */}
                <div className={`relative h-52 sm:h-72 ${project.color} flex items-center justify-center overflow-hidden`}>
                  <span className="absolute top-5 sm:top-6 left-5 sm:left-7 text-xs font-extrabold tracking-widest text-[#647780]/70">
                    PROJECT / {project.number}
                  </span>

                  <div className="absolute w-48 h-48 sm:w-64 sm:h-64 border border-[#2283A6]/10 rounded-full group-hover:scale-125 transition-transform duration-700" />

                  <div className="absolute w-36 h-36 sm:w-48 sm:h-48 border border-[#2283A6]/15 rounded-full group-hover:scale-125 transition-transform duration-700" />

                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500">
                    <Icon
                      size={48}
                      strokeWidth={1.5}
                      className="text-[#2283A6]"
                    />
                  </div>

                  <span className="absolute bottom-5 sm:bottom-6 right-5 sm:right-7 bg-white/90 backdrop-blur px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold text-[#647780]">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="p-5 sm:p-9">
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-xs font-extrabold tracking-widest text-[#2283A6]">
                      PROJECT {project.number}
                    </span>

                    <FolderCode size={21} className="text-[#FABE07]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#172B35] mb-3 sm:mb-4 group-hover:text-[#2283A6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#647780] leading-7 mb-6 sm:mb-7">
                    {project.desc}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-lg bg-[#F6FCFC] border border-[#DCE9EC] text-[11px] sm:text-xs font-bold text-[#647780]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT LINKS */}
                  <div className="mt-7 sm:mt-8 pt-6 border-t border-[#DCE9EC]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#647780] mb-5">
                      <Code2 size={17} />
                      Project Details
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      {/* LIVE DEMO */}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#2283A6] text-white text-xs sm:text-sm font-bold hover:bg-[#196985] hover:-translate-y-1 transition-all duration-300"
                        >
                          Live Demo
                          <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center px-3 py-3 rounded-xl bg-[#F1F5F6] text-[#94A3A8] text-xs sm:text-sm font-bold cursor-not-allowed">
                          Demo Soon
                        </span>
                      )}

                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-[#F6FCFC] border border-[#DCE9EC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#172B35]">
              Have a project in mind?
            </h3>

            <p className="text-sm text-[#647780] mt-2">
              Mari berdiskusi dan berkolaborasi bersama.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2283A6] text-white font-bold text-sm hover:bg-[#196985] hover:-translate-y-1 transition-all"
          >
            Let's Collaborate
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
