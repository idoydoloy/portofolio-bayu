
import { BriefcaseBusiness, CalendarDays, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack',
      company: 'PT Laskar Teknologi Mulia (Cyberlabs)',
      period: '2025 - 2026 ',
      desc: 'Mengembangkan antarmuka web responsif menggunakan laravel.',
      type: 'Internship',
    },
   
  ];

  return (
    <section
      id="experience"
      className="portfolio-section bg-[#F6FCFC]"
    >
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="mb-14">
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

          <div className="relative space-y-8">

            {/* TIMELINE LINE */}
            <div className="absolute left-[22px] top-8 bottom-8 w-[2px] bg-[#DCE9EC]" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-5 sm:gap-7"
              >

                {/* TIMELINE ICON */}
                <div className="relative z-10 shrink-0 w-11 h-11 rounded-xl bg-[#2283A6] border-4 border-[#F6FCFC] flex items-center justify-center shadow-md">
                  <BriefcaseBusiness
                    size={18}
                    className="text-white"
                  />
                </div>

                {/* EXPERIENCE CARD */}
                <div className="portfolio-card flex-1 p-6 sm:p-8">

                  {/* TOP INFO */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5F3F8] text-[#2283A6] text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FABE07]" />
                      {exp.type}
                    </span>

                    <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#647780]">
                      <CalendarDays size={15} />
                      {exp.period}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#172B35] mb-2">
                    {exp.role}
                  </h3>

                  {/* COMPANY */}
                  <p className="text-[#2283A6] font-bold text-sm mb-4">
                    {exp.company}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-[#647780] text-sm sm:text-base leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-6 pt-5 border-t border-[#DCE9EC] flex items-center justify-between">
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