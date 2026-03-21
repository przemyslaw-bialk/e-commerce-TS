export const dynamic = "force dynamic";

import ProductsList from "@components/admin/ProductList";

const ManageProductsPage = () => {
  return (
    <div>
      <h2>manage products</h2>
      <ProductsList />
    </div>
  );
};

export default ManageProductsPage;
