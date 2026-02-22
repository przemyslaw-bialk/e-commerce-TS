import dbConnect from "@lib/mongodb";
import Item from "@models/Item";

const Home = async () => {
  await dbConnect();
  const items = await Item.find({});
  console.log(items);

  return (
    <div>
      <h1>hello next!</h1>
    </div>
  );
};

export default Home;
