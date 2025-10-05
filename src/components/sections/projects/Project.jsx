import { RevealOnScroll } from "../../RevealOnScroll";

export default function Project() {
  const frontEntSkills = ["React", "Next.js", "JavaScript",  "TailwindCSS"];
  const backEndSkills = ["Node.js", "Express", "MongoDB", "SQL", "Python", "Spring Boot"];

  return (
    <section id="projects" className="min-h-screen flex justify-center items-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl ax-auto px-4">
        <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-center text-transparent "> Featured Project </h2>

        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-6 ">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,226,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">abs-portal</h3>
            <p className="text-gray-400 mb-4">An enterprise front-end application optimized with RESTful APIs and reusable components, reducing code duplication by 70%.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {
                frontEntSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-2 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)] transition-all">
                      {skill}
                    </span>
                  )
                )
              }
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className=" text-blue-400 hover:text-blue-300 transaction-colors m-4">View Projects ➡️ </a>
            </div>
          </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,226,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">abs-portal</h3>
            <p className="text-gray-400 mb-4">An enterprise front-end application optimized with RESTful APIs and reusable components, reducing code duplication by 70%.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {
                frontEntSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-2 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)] transition-all">
                      {skill}
                    </span>
                  )
                )
              }
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className=" text-blue-400 hover:text-blue-300 transaction-colors m-4">View Projects ➡️ </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-6 ">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,226,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">abs-portal</h3>
            <p className="text-gray-400 mb-4">An enterprise front-end application optimized with RESTful APIs and reusable components, reducing code duplication by 70%.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {
                frontEntSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-2 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)] transition-all">
                      {skill}
                    </span>
                  )
                )
              }
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className=" text-blue-400 hover:text-blue-300 transaction-colors m-4">View Projects ➡️ </a>
            </div>
          </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,226,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">abs-portal</h3>
            <p className="text-gray-400 mb-4">An enterprise front-end application optimized with RESTful APIs and reusable components, reducing code duplication by 70%.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {
                frontEntSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 ml-2 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,226,0.2)] transition-all">
                      {skill}
                    </span>
                  )
                )
              }
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className=" text-blue-400 hover:text-blue-300 transaction-colors m-4">View Projects ➡️ </a>
            </div>
          </div>
        </div>


      </div>

   


      </RevealOnScroll>
    </section>
  );
}
