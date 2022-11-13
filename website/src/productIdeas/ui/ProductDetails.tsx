import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import type { PricedProduct } from "../businessLogic/Idea";

import styles from "./Details.module.css";
import { AddToBag } from "../../shoppingBag/ui/AddToBag";
import { LoadBespokeDetails } from "./LoadBespokeDetails";
import { TalkAboutIt } from "../../getInTouch/ui/TalkAboutIt";
import { PriceTag } from "../../atomic-ui/PriceTag";

interface Props {
  idea: PricedProduct;
}

export const ProductDetails = ({ idea }: Props) => {
  const {
    alt,
    blogPost,
    description,
    id,
    image,
    maxQuantity,
    price,
    subTitle,
    title,
    type,
  } = idea;

  return (
    <div className={styles.container}>
      <NextSeo title={`${title} - ${subTitle} // DC5B Ideas`} />
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumb}>
          Ideas
        </Link>{" "}
        &gt; <span className={styles.currentBreadcrumb}>{title}</span>
      </nav>
      <main className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.heroImage}>
          <Image src={image} alt={alt} fill />
        </div>
        <PriceTag price={price} type={type} />
        <p className={styles.cardDescription}>{description}</p>
        <AddToBag id={id} maxQuantity={maxQuantity} price={price} />
        <TalkAboutIt blogPost={blogPost} id={id} />
        <LoadBespokeDetails id={id} />
      </main>
    </div>
  );
};
