import { RevealOnScroll } from "../../RevealOnScroll";

export default function About() {
  const frontEntSkills = ["React", "Next.js", "JavaScript", "TypeScript", "TailwindCSS", "Angular"];
  const backEndSkills = ["Node.js", "Express", "MongoDB", "SQL", "Python", "Spring Boot"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-center text-transparent ">About   Me</h2>

          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Driven by curiosity and a love for building, I craft digital experiences that merge clean code with creative vision - turning ideas into impactful, scalable solutions.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEntSkills.map((skill, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,226,02)] transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((skill, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,02)] transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  {" "}
                  <strong> B. Sc In Computer Science </strong>Daffodil International University [2019-2023]
                </li>
                <li> Complete Web Development With Jhankar Mahbub [Level 1] </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Junior Software Engineer at Celloscope Limited [August, 2023 - Present]</h4>
                  <p>Developed and maintained angular based web app and maintained micro architecture.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Intern at Celloscope Limited [2023]</h4>
                  <p>Assisted in front-end development and REST api integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
