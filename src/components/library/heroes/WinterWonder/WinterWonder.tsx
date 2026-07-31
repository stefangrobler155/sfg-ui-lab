"use client";

import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Canvas } from "@react-three/fiber";
import { Snow } from "./effects/Snow";

export function WinterWonder() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071426] via-slate-950 to-slate-950" />

        {/* Cold Light */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-300/10
            blur-[140px]
          "
        />
        <div
          className="
            absolute
            -left-24
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.03]
            via-transparent
            to-transparent
          "
        />
      </div>
      
        {/* Snow */}

        <div className="absolute inset-0 z-0">

          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 60,
            }}
            dpr={[1, 1.5]}
            gl={{
              alpha: true,
              antialias: false,
            }}
          >
            <Snow />
          </Canvas>

        </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div
          className="
            relative
            max-w-3xl
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-10
            backdrop-blur-xl
            md:p-14
          "
        >
          {/* Glass highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-b
              from-white/10
              via-transparent
              to-transparent
            "
          />

          {/* Content */}
          <div className="relative z-10">

            <Typography
              as="p"
              className="mb-6 uppercase tracking-[0.35em] text-cyan-300"
            >
              Winter Collection
            </Typography>

            <Typography
              as="h1"
              variant="display"
              className="text-white"
            >
              Frozen Light.
            </Typography>

            <Typography
              variant="lead"
              className="mt-8 max-w-xl text-slate-300"
            >
              Elegant winter-inspired hero section featuring atmospheric lighting,
              cinematic snowfall and immersive motion.
            </Typography>

            <div className="mt-12 flex gap-4">
              <Button>Explore</Button>

              <Button variant="outline">
                Learn More
              </Button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}