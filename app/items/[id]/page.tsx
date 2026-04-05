import dbConnect from "@lib/mongodb";
import Item from "@models/Item";

type Prop = {
  params: {
    id: string;
  };
};

const ItemPage = async ({ params }: Prop) => {
  await dbConnect();
  const item = await Item.findById(params.id);
  console.log(item);

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemPage;
