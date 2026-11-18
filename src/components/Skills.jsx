import {
  Code2,
  Database,
  Wrench,
  Globe,
  Server,
  Braces,
} from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Development',
      subtitle: 'Building user interfaces',
      icon: Code2,
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend Development',
      subtitle: 'Server-side development',
      icon: Server,
      skills: [
        'PHP',
        'Laravel',
        'Node.js',
        'Express.js',
      ],
    },
    {
      title: 'Database',
      subtitle: 'Data management',
      icon: Database,
      skills: [
        'MySQL',
        'SQL',
        'Database Design',
      ],
    },
    {
      title: 'Tools & Technologies',
      subtitle: 'Development tools',
      icon: Wrench,
      skills: [
        'VS Code',
        'Git',
        'GitHub',
        'Vite',
      ],
    },
    {
      title: 'Other Skills',
      subtitle: 'Additional capabilities',
      icon: Globe,
      skills: [
        'REST API',
        'Responsive Design',
        'Problem Solving',
      ],
    },
    {
      title: 'Programming Concepts',
      subtitle: 'Fundamental knowledge',
      icon: Braces,
      skills: [
        'OOP Basics',
        'Web Development',
        'Debugging',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="portfolio-section bg-[#F6FCFC] overflow-hidden"
    >
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14">

          <span className="section-kicker">
            <span className="w-8 h-[2px] bg-[#FABE07]" />
            MY EXPERTISE
          </span>

          <h2 className="section-title mt-4">
            Skills &{' '}
            <span className="text-[#2283A6]">
              Technologies.
            </span>
          </h2>

          <p className="section-description mt-4 max-w-xl">
            Teknologi, tools, dan kemampuan yang saya pelajari
            serta gunakan dalam proses pengembangan aplikasi
            dan website.
          </p>

        </div>

        {/* SKILL CARDS */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="
                  bg-white
                  p-5 sm:p-7 lg:p-8
                  rounded-2xl sm:rounded-3xl
                  border border-[#DCE9EC]
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-[#2283A6]/10
                  hover:border-[#C6E1E9]
                  transition-all duration-300
                "
              >

                {/* CARD HEADER */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6">

                  <div className={`
                    w-11 h-11 sm:w-12 sm:h-12
                    shrink-0 rounded-xl
                    flex items-center justify-center
                    ${index % 2 === 0
                      ? 'bg-[#E5F3F8]'
                      : 'bg-[#FFF8E5]'
                    }
                  `}>
                    <Icon
                      size={22}
                      className="text-[#2283A6]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="
                      text-base sm:text-lg
                      font-extrabold
                      text-[#172B35]
                    ">
                      {group.title}
                    </h3>

                    <p className="
                      text-xs sm:text-sm
                      text-[#94A3A8]
                      mt-1
                    ">
                      {group.subtitle}
                    </p>
                  </div>

                </div>

                {/* SKILL TAGS */}
                <div className="flex flex-wrap gap-2 sm:gap-3">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 sm:px-4
                        py-2 sm:py-2.5
                        rounded-lg sm:rounded-xl
                        bg-[#F6FCFC]
                        border border-[#DCE9EC]
                        text-xs sm:text-sm
                        font-semibold
                        text-[#647780]
                        hover:border-[#2283A6]
                        hover:text-[#2283A6]
                        hover:bg-[#E5F3F8]
                        transition-all duration-200
                        cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="
          mt-10 sm:mt-12
          text-center
          p-5 sm:p-6
          rounded-2xl
          bg-white
          border border-[#DCE9EC]
        ">
          <p className="
            text-xs sm:text-sm
            text-[#647780]
            leading-relaxed
          ">
            <span className="text-[#FABE07] font-bold">
              ●
            </span>
            {' '}
            Always learning, always improving.
          </p>
        </div>

      </div>
    </section>
  );
}
