import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { getCategoryDisplay } from "../../services";
import styles from "./blogStyles/Categories.module.css";

const Categories = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    getCategoryDisplay().then((newCategories) => setcategories(newCategories));
  }, []);

  const [dropdownToggledOne, toggleDropdownOne] = useState(false);
  const handleClickOne = () => {
    toggleDropdownOne(!dropdownToggledOne);
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.cat}>
        <div className={styles.Categories}>
          <h1>Select by Categories :</h1>
          <div>
            <div className={styles.cardCatDisplay}>
              {categories.map((category) => (
                <div className={styles.cardCategory} key={category.id}>
                  <img src={category.photo.url} alt="" width="100%" />
                  <Link
                    href={`/blogs/category/${category.slug}`}
                    key={category.slug}
                  >
                    <p>{category.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
            </div>




        <div className={styles.catFlex}>
          <h3>Categories :</h3>

          <div className={styles.dropdown}>


            <button
              onClick={handleClickOne}
              id="dropbtn"
              className={styles.dropbtn}
            >
              <i className="fa fa-bars"></i>
            </button>


            <div
              className={`${styles.dropdownContent} ${
                dropdownToggledOne ? styles.show : ""
              }`}
            >
              {categories.map((category) => (
                <div className={styles.cardCategoryFlex} key={category.id}>
                  <Link
                    href={`/blogs/category/${category.slug}`}
                    key={category.slug}
                  >
                    <p>{category.name}</p>
                  </Link>
                </div>
              ))}
            </div>


        </div>
      </div>
    </div>
  );
};

export default Categories;
