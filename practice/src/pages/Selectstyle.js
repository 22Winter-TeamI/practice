import styles from "../css/Selectstyle.module.css";
import Nav from "../components/Nav";
import leftbutton from "../images/leftbutton.jpg";
import rightbutton from "../images/rightbutton.jpg";
// import ProgressBar from "../components/ProgressBar";

export default function Selectstyle() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Select Style</h1>
 
        
              {/* <ProgressBar /> */}
            

            <div className={styles.select}>
              <div className={styles.imagebox}>
                <a href="/BackgroundPhotoshop">
                  <img
                    src={leftbutton}
                    alt="Background Photoshop"
                    className={styles.image}
                  />
                </a>
                <div className={styles.image_text}>
                  <div>Background</div>
                  <div>Photoshop</div>
                </div>
              </div>

              <div className={styles.imagebox}>
                <a href="/ChangePaintingStyle">
                  <img
                    src={rightbutton}
                    alt="Change Painting Style"
                    className={styles.image}
                  />
                </a>
                <div className={styles.image_text}>
                  <div>Change</div>
                  <div>Painting Style</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
