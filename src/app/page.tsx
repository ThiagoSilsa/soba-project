
import DarkVeil from "@/components/reactbits/DarkVeil";
import Link from "next/link";
import styles from "./Inicial.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <DarkVeil />
      </div>
      
      <main className={`${styles.main} animate-fadeInUp`}>
        <h3>Bem vindo ao</h3>
        <h1>SoBa</h1>
        <Button asChild 
        variant={"default"}
        size="lg" className={styles.buttom}>
          <Link 
          href="/home">Entre</Link>
        </Button>
      </main>
    </div>
  );
}