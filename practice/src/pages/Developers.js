import styles from "../css/Main.module.css";
import Banner from "../components/Banner";
import MainMenuBar from "../components/MainMenuBar";
import ItemWrap from "../components/ItemWrap";

function Developers() {
  return (
    <>
      <Banner text="Developers" />
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MainMenuBar />
          <ItemWrap />
        </section>
      </div>
    </>
  );
}

export default Developers;
