import DarkVeil from "@/components/reactbits/DarkVeil";
import Link from "next/link";
import styles from "./Inicial.module.css";
import Particles from "@/components/reactbits/Particles/Particles";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={125}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <main className={`${styles.main} animate-fadeInUp`}>
        <h3>Bem vindo ao</h3>
        <h1>SoBa</h1>

        <Link href="/home">Entre</Link>
        <button type="button"></button>
      </main>
    </div>
  );
}
