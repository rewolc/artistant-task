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
        <div className="text">created by</div>

        <div className="author">{author.display_name}</div>
      </div>
      <div className="collection-name-cont ">
        <div className="colelction-name">{name}</div>
      </div>
      <img src={img} alt="" />
      <div className="item-info-cont">
        <div className="available-cont">
          <div className="available info-text">available</div>
          <div className="howMany">
            {available} of {quantity}
          </div>
        </div>
        <div className="price-cont">
          <div className="price-text info-text">price</div>
          <div className="price">{price} ETH</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
