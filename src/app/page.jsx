import CardList from "@/components/cardList/CardList";
import styles from "./homepage.module.css";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";


export default function Home() {
  return (
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </div>

);
  
}
