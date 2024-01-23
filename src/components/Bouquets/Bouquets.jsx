import React from "react";
import styles from "./Bouquets.module.css";

const Bouquets = (props) => {
  return (
    <div className={styles.content}>
      <div >
        {props.flowersData.map((img) => (
          <a
            href="#"
            key={img.id}
            className={styles.editor_selections_item}
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            <div
              className={styles.image}
              style={{
                // Получаем в фон картинку из нашей мини базы
                backgroundImage: `url(${img.image})`,
              }}
            >
              {/* <p>{img.nameCardTitle}</p> это надпист на картинке вроде пока не нужна */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bouquets;
