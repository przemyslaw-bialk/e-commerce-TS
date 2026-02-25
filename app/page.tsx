import HomeCarousel from "@components/home/HomeCarousel";
import dbConnect from "@lib/mongodb";
import Item from "@models/Item";

const Home = async () => {
  await dbConnect();
  const items = await Item.find({});
  console.log(items);

  return (
    <div>
      <HomeCarousel />
      <div>
        {items.map((item) => (
          <p key={item._id}>{item.name}</p>
        ))}
      </div>

      <p>test</p>
    </div>
  );
};

export default Home;
