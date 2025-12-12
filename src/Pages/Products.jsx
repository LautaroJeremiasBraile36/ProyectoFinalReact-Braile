import GetDocsDB from "../utils/GetDocsDB";
import GetDocsDBProvider from "../context/GetDocsDBProvider";

const Products = () => {
  return (
    <GetDocsDBProvider>
      <GetDocsDB />
    </GetDocsDBProvider>
  );
};

export default Products;
