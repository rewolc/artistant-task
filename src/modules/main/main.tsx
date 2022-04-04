import "./main.scss";
import Item from "../item/item";
import { useAppDispatch, useAppSelector } from "../../redux/actions";
import { fetchItems } from "../../redux/item-reducer/item-actions";
import { useEffect, useState, useMemo } from "react";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const [chechked, changeChechked] = useState(false);
  const { items } = useAppSelector((state) => state.itemReducer);
  const filtereItems = useMemo(
    () => items.filter((i) => i.quantity_available !== 0),
    [items]
  );

  return (
    <div className="main-cont">
      <div className="checkbox-cont">
        <input
          type="checkbox"
          name="available"
          className="checkbox"
          onClick={() => changeChechked(!chechked)}
        />
        <label htmlFor="available">Available?</label>
      </div>
      {chechked
        ? filtereItems.map((i) => {
            return (
              <Item
                key={i.product_id}
                name={i.name}
                author={i.created_by}
                quantity={i.quantity}
                available={i.quantity_available}
                price={i.initial_price}
              />
            );
          })
        : items.map((i) => {
            return (
              <Item
                key={i.product_id}
                name={i.name}
                author={i.created_by}
                quantity={i.quantity}
                available={i.quantity_available}
                price={i.initial_price}
              />
            );
          })}
    </div>
  );
};

export default Main;
