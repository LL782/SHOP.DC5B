import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../data/products";
import { initiateCheckout } from "../stripe/initiateCheckout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DC5B Odd Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DC5B Odd Shop</h1>

        <p className={styles.description}>
          Imagination aids for the younger generation
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, alt, price, id } = product;
            const displayPrice =
              price.amount >= 1
                ? `£${price.amount.toFixed(2)}`
                : `Only ${price.amount * 100}p`;
            return (
              <li key={price.id} className={styles.card}>
                <h3>{title}</h3>
                <div className={styles.imageHolder}>
                  <img src={image} alt={alt} />
                </div>
                <p className={styles.price}>
                  {displayPrice}{" "}
                  <span className={styles.priceType}>download</span>
                </p>
                <p className={styles.cardDescription}>{description}</p>
                <button
                  className={styles.button}
                  onClick={() => {
                    initiateCheckout({
                      lineItems: [{ price: price.id, quantity: 1 }],
                    });
                  }}
                >
                  Buy now
                </button>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
