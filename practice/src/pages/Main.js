import "../css/Main.css";
import Banner from "../components/Banner";
import MainMenuBar from "../components/MainMenuBar";
import ResultPicture from "../components/ResultPicture";
import styles from "../css/Main.module.css";
import Carousel from "../components/Carousel";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MainMenuBar />
          <Carousel />
          {/* <Banner text="Gallery module" /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "columns",
              width: "100%",
              justifyContent: "center",
              padding: "0 10%",
            }}
          >
            <div className={styles.containerTest}>
              <div className={styles.navBar}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
              <div className={styles.main}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
              <div className={styles.sidebar}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
              <div className={styles.sidebar1}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
              <div className={styles.sidebar2}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
              <div className={styles.contentBox}>
                <div className={styles.content1}>
                  <ResultPicture title="내가 만든 사진 1" />
                </div>
                <div className={styles.content2}>
                  <ResultPicture title="내가 만든 사진 1" />
                </div>
                <div className={styles.content3}>
                  <ResultPicture title="내가 만든 사진 1" />
                </div>
                <div className={styles.content3}>
                  <ResultPicture title="내가 만든 사진 1" />
                </div>
              </div>
              <div className={styles.footer}>
                <ResultPicture title="내가 만든 사진 1" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
