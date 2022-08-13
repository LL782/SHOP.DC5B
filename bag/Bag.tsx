import { BiShoppingBag } from "react-icons/bi";
import styles from "./Bag.module.css";
import { PrimaryLink } from "../atomic-ui/PrimaryLink";
import { useBag } from "./useBag";
import { Table } from "./Table";
import products from "../data/products";
import { displayPrice } from "./displayPrice";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";

export const BAG_COLUMNS = {
  title: "Item",
  quantity: "Quantity",
  remove: "",
  pricePerItem: "Price",
  total: "Total",
};

export const Bag = () => {
  const { bagItems, checkout, checkoutDisabled, updateItem } = useBag();

  const rows = bagItems.map(({ id, pricePerItem, quantity }) => {
    const product = products.find(({ price }) => price.id === id);

    return {
      id,
      title: product.title,
      quantity,
      remove: (
        <button onClick={() => updateItem({ id, quantity: 0 })} type="button">
          -
        </button>
      ),
      pricePerItem: displayPrice(pricePerItem),
      total: displayPrice(quantity * pricePerItem),
    };
  });

  const totalOfRows = bagItems.reduce((accumulator, { pricePerItem }) => {
    return accumulator + pricePerItem;
  }, 0);

  const footer = { Total: displayPrice(totalOfRows) };

  return (
    <div className={styles.container}>
      <h1>
        <BiShoppingBag />
      </h1>
      {rows.length > 0 ? (
        <>
          <Table columns={BAG_COLUMNS} rows={rows} footer={footer}></Table>
          <PrimaryButton onClick={checkout} disabled={checkoutDisabled}>
            Checkout
          </PrimaryButton>
        </>
      ) : (
        <>
          <h2>Your bag is empty</h2>
          <p>Let&apos;s find something to go in it?</p>
          <PrimaryLink href="/">Go shopping</PrimaryLink>
        </>
      )}
    </div>
  );
};
