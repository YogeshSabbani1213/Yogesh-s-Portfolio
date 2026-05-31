import { Briefcase, Globe, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-8 lg:px-16"
    >
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-12">
        Freelance Experience
      </h2>

      <div className="max-w-6xl mx-auto">

        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-md
          p-8
          lg:p-10
          hover:border-orange-500/40
          transition-all duration-500
          hover:-translate-y-2
          "
        >
          {/* Top Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <Briefcase size={18} className="text-orange-500" />
              <span className="text-orange-400 font-medium">
                Freelance Client Project
              </span>
            </div>

            {/* Hospital Name */}
            <h3 className="text-3xl font-bold text-white mb-2">
              Prashanthi Neuro Psychiatric Hospital
            </h3>

            <p className="text-gray-400 mb-6">
              Successfully designed, developed, deployed, and delivered a
              complete hospital website to a real client, helping improve
              their digital presence and patient accessibility.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">

              <div className="bg-white/5 rounded-2xl p-4">
                <Globe className="text-orange-500 mb-2" />
                <h4 className="text-white font-semibold">
                  Live Website
                </h4>
                <p className="text-sm text-gray-400">
                  Production Deployment
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4">
                <TrendingUp className="text-orange-500 mb-2" />
                <h4 className="text-white font-semibold">
                  SEO Setup
                </h4>
                <p className="text-sm text-gray-400">
                  Google Indexing & Visibility
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4">
                <Briefcase className="text-orange-500 mb-2" />
                <h4 className="text-white font-semibold">
                  Client Delivery
                </h4>
                <p className="text-sm text-gray-400">
                  Successfully Sold
                </p>
              </div>

            </div>

            {/* Responsibilities */}
            <div className="space-y-4 text-gray-300">

              <div className="flex gap-3">
                <span className="text-orange-500">●</span>
                <p>
                  Developed and deployed a full-stack hospital website
                  using the MERN Stack with secure backend APIs and JWT authentication.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500">●</span>
                <p>
                  Built a fully responsive user interface with role-based
                  authorization and password encryption using bcrypt.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500">●</span>
                <p>
                  Configured hosting, domain management, deployment pipeline,
                  SEO optimization, sitemap generation, and Google indexing.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500">●</span>
                <p>
                  Improved the hospital's online visibility and patient reach
                  through technical SEO implementation.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://www.prashanthineuropsychiatrichospital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-6 py-3
                bg-orange-500
                hover:bg-orange-600
                rounded-xl
                text-white
                font-medium
                transition
                "
              >
                View Live Website
              </a>

              <span
                className="
                px-6 py-3
                rounded-xl
                border border-white/10
                text-gray-300
                "
              >
                Freelance Client Project
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;