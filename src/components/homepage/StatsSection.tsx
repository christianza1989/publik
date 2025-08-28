"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// <<< PAKEITIMAS: AnimatedCounter perkeltas čia ir supaprastintas >>>
type AnimatedCounterProps = {
  from: number;
  to: number;
  suffix?: string;
};

function AnimatedCounter({ from, to, suffix = "" }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString('lt-LT') + suffix;
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} className="text-4xl sm:text-5xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400" />;
}

const stats = [
    {
      name: "Prieinamų Leidėjų",
      value: 250,
      suffix: "+",
    },
    {
      name: "Publikuotų Straipsnių",
      value: 1200,
      suffix: "+",
    },
    {
      name: "Sutaupytų Valandų",
      value: 8700,
      suffix: "+",
    },
    {
      name: "Patenkintų Klientų",
      value: 150,
      suffix: "+",
    },
];

// <<< PAKEITIMAS: Sukuriamas atskiras kortelės komponentas interaktyvumui >>>
const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(150); mouseY.set(150); }} // Grąžina efektą į centrą
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-lg overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${smoothMouseX}px ${smoothMouseY}px,
                            rgba(139, 92, 246, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 flex flex-col items-center">
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-base leading-7 text-muted-foreground">{stat.name}</p>
            </div>
        </motion.div>
    );
};

export const StatsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 dark:bg-slate-900 py-20 sm:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Sėkmė, Išmatuojama Skaičiais
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Mūsų platforma jau padėjo pasiekti apčiuopiamų rezultatų šimtams klientų.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.name} stat={stat} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
