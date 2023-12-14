'use client'
import styles from "../styles/Navigation.module.css";
import Link from "next/link";

const Navigation = () =>{

    const changeTheme = () =>{
        let styles = document.documentElement.style;
        if(styles.getPropertyValue("--text-color") === "white"){
            styles.setProperty("--text-color", "black");
            styles.setProperty("--background-color", "whitesmoke");
            styles.setProperty("--box-shadow", "black");
        }
        else{
            styles.setProperty("--text-color", "white");
            styles.setProperty("--background-color", "rgb(20 20 20)");
            styles.setProperty("--box-shadow", "white");
        }
    }

    return(
        <div className={styles.container}>
            <Link href={"/"} className={styles.href}>Home</Link>
            <Link href={"/Recipes"} className={styles.href}>Recipes</Link>
            <button className={styles.themeBtn} onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default Navigation;