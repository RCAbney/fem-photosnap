import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TextBesidesImage.module.css";

const TextBesidesImage = ({ leftImage = false, image, dark = false }) => {
  return (
    <section
      className={`${styles.textBesidesImageWrap} ${
        leftImage && styles.imageLeft
      } ${dark && styles.dark}`}
    >
      <div className={styles.textWrap}>
        <h2>Create and Share your photo stories.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          excepturi in, cupiditate atque reprehenderit minus sint laborum rem
          obcaecati labore et laboriosam aliquam tempora ipsam. Eaque sapiente
          incidunt aut tenetur.
        </p>
        <Link href="#">
          <a>Linky</a>
        </Link>
      </div>
      <Image
        placeholder="blur"
        className={styles.image}
        src={image}
        alt="a loptop"
      />
    </section>
  );
};

export default TextBesidesImage;
