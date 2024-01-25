import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>Заказать</div>
      <div>
        {props.footerOrderData.map((img) => (
          <a
            href="#"
            key={img.id}
            className={styles.editor_selections_item}
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            {img.text}
          </a>
        ))}
      </div>

      <div className={styles.header}>Популярные места</div>
      <div>
        {props.footerPopularPlacesData.map((img) => (
          <a
            href="#"
            key={img.id}
            className={styles.editor_selections_item}
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            {img.text}
          </a>
        ))}
      </div>

      <div className={styles.header}>Города</div>
      <div>
        {props.footerCitiesData.map((img) => (
          <a
            href="#"
            key={img.id}
            className={styles.editor_selections_item}
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            {img.text}
          </a>
        ))}
      </div>

      <div className={styles.header}>О компании</div>
      <div>
        {props.footerAboutTheCompanyData.map((img) => (
          <a
            href="#"
            key={img.id}
            className={styles.editor_selections_item}
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            {img.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

