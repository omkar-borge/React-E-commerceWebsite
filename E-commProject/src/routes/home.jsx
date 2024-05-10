import { useSelector } from "react-redux";
import HomeItem from "../components/homeItem.jsx";

const Home = () => {
  const items = useSelector((store) => store.items);
  // console.log(items);
  return (
    <main className="main-content">
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}>
            {" "}
          </HomeItem>
        ))}
      </div>
    </main>
  );
};

export default Home;
