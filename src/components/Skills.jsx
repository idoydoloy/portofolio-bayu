
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  GitBranch,
  Monitor,
  Braces,
} from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['VS Code', 'Git', 'GitHub', 'Vite'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'Database Design', 'SQL'],
    },
    {
      title: 'Other Skills',
      icon: Globe,
      skills: ['REST API', 'Responsive Design', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-5 sm:px-8 bg-[#F6FCFC]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-[#FABE07]" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#2283A6]">
              MY EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B35]">
            Skills & <span className="text-[#2283A6]">Technologies.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[#647780] leading-relaxed">
            Teknologi dan tools yang saya pelajari dan gunakan
            dalam proses pengembangan website.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-[#DCE9EC] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2283A6]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-[#E5F3F8]' : 'bg-[#FFF8E5]'
                  }`}>
                    <Icon
                      size={25}
                      className="text-[#2283A6]"
                    />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#172B35]">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2.5 rounded-xl bg-[#F6FCFC] border border-[#DCE9EC] text-sm font-semibold text-[#647780] hover:border-[#2283A6] hover:text-[#2283A6] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#647780]">
            <span className="text-[#FABE07] font-bold">●</span>
            {' '}Always learning, always improving.
          </p>
        </div>

      </div>
    </section>
  );
}
