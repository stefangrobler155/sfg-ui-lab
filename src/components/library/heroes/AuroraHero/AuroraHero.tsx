"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0">

        {/* Blob 1 */}

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/30 blur-[120px]"
        />

        {/* Blob 2 */}

        <motion.div
          animate={{
            x: [0, -140, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-500/25 blur-[140px]"
        />

        {/* Blob 3 */}

        <motion.div
          animate={{
            x: [0, 70, -90, 0],
            y: [0, 100, -40, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[160px]"
        />
              {/* Grid Overlay */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-slate-950/20 to-slate-950" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 rounded-full border border-cyan-400/30 bg-white/5 px-5 py-2 backdrop-blur-md"
            >
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
                New UI Collection
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
              }}
              className="max-w-5xl text-6xl font-bold tracking-tight text-white md:text-8xl"
            >
              Build
              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}Beautiful
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Discover premium UI components crafted with
              Next.js, Tailwind CSS and Framer Motion.
              Designed for developers who love beautiful interfaces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="mt-12 flex flex-wrap justify-center gap-5"
            >
              <button className="
                                group
                                relative
                                overflow-hidden
                                rounded-full
                                bg-cyan-400
                                px-8
                                py-4
                                font-semibold
                                text-slate-950
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
                                ">
                Explore Library
              </button>

              <button className="
                                rounded-full
                                border
                                border-white/20
                                bg-white/5
                                px-8
                                py-4
                                font-semibold
                                text-white
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:bg-white/10
                                hover:border-cyan-300/40
                                ">
                View Source
              </button>
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">

              <motion.div
                animate={{
                  y: [4, 18, 4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="mt-2 h-3 w-3 rounded-full bg-cyan-300"
              />

            </div>
          </motion.div>
    </section>
  );
}