import "./item.scss";
import img from "../../assets/item.png";
import { ICreated } from "../../redux/interfaces/interfaces";

const Item: React.FC<{
  name: string;
  author: ICreated;
  quantity: number;
  available: number;
  price: number;
}> = ({ name, author, quantity, available, price }) => {
  return (
    <div className="item-cont">
      <div className="created">
        <h2 className="text">created by</h2>

        <h2 className="author">{author.display_name}</h2>
      </div>
      <div className="collection-name-cont ">
        <div className="colelction-name">{name}</div>
      </div>
      <img src={img} alt="" />
      <div className="item-info-cont">
        <div className="available-cont">
          <h3 className="available info-text">available</h3>
          <h3 className="howMany">
            {available} of {quantity}
          </h3>
        </div>
        <div className="price-cont">
          <h3 className="price-text info-text">price</h3>
          <h3 className="price">{price} ETH</h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
