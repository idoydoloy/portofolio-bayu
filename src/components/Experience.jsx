import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'PT Teknologi Laskar Mulia (Cyberlabs)',
      period: '2025',
      desc: 'Membantu tim dalam proses perancangan, pengembangan, dan pemeliharaan website. Memastikan fungsi serta tampilan website berjalan dengan baik sesuai kebutuhan.',
      type: 'Internship',
      skills: ['Web Development', 'Laravel', 'Frontend'],
    },
  ];

  return (
    <section
      id="experience"
      className="portfolio-section bg-[#F6FCFC] overflow-hidden"
    >
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14">
          <span className="section-kicker">
            <span className="w-8 h-[2px] bg-[#FABE07]" />
            MY JOURNEY
          </span>

          <h2 className="section-title mt-4">
            Work <span className="text-[#2283A6]">Experience.</span>
          </h2>

          <p className="section-description mt-4 max-w-xl">
            Perjalanan pengalaman dan aktivitas saya dalam
            mengembangkan kemampuan di bidang teknologi.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-7 sm:space-y-8">

            {/* TIMELINE LINE */}
            <div className="absolute left-[17px] sm:left-[21px] top-8 bottom-8 w-[2px] bg-[#DCE9EC]" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-3 sm:gap-7"
              >

                {/* TIMELINE ICON */}
                <div className="
                  relative z-10 shrink-0
                  w-9 h-9 sm:w-11 sm:h-11
                  rounded-xl bg-[#2283A6]
                  border-[3px] sm:border-4 border-[#F6FCFC]
                  flex items-center justify-center
                  shadow-md
                ">
                  <BriefcaseBusiness
                    size={16}
                    className="text-white sm:w-[18px] sm:h-[18px]"
                  />
                </div>

                {/* EXPERIENCE CARD */}
                <div className="
                  portfolio-card flex-1 min-w-0
                  p-4 sm:p-8
                  rounded-2xl sm:rounded-3xl
                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-[#2283A6]/10
                  transition-all duration-300
                ">

                  {/* TOP INFO */}
                  <div className="
                    flex flex-col min-[420px]:flex-row
                    min-[420px]:items-center
                    min-[420px]:justify-between
                    gap-3 mb-5
                  ">

                    <span className="
                      inline-flex items-center gap-2
                      w-fit px-3 py-1.5
                      rounded-full bg-[#E5F3F8]
                      text-[#2283A6] text-xs font-bold
                    ">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FABE07]" />
                      {exp.type}
                    </span>

                    <span className="
                      flex items-center gap-2
                      text-xs sm:text-sm font-semibold
                      text-[#647780]
                    ">
                      <CalendarDays size={15} />
                      {exp.period}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-lg sm:text-2xl
                    font-extrabold text-[#172B35]
                    mb-2 leading-snug
                  ">
                    {exp.role}
                  </h3>

                  {/* COMPANY */}
                  <p className="
                    text-[#2283A6] font-bold
                    text-sm sm:text-base
                    mb-4 leading-relaxed
                  ">
                    {exp.company}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="
                    text-[#647780]
                    text-sm sm:text-base
                    leading-7
                  ">
                    {exp.desc}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5
                          rounded-lg
                          bg-[#F6FCFC]
                          border border-[#DCE9EC]
                          text-[11px] sm:text-xs
                          font-bold text-[#647780]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM */}
                  <div className="
                    mt-6 pt-5
                    border-t border-[#DCE9EC]
                    flex items-center justify-between
                  ">
                    <span className="text-xs font-semibold text-[#647780]">
                      Experience {index + 1}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#2283A6]"
                    />
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
