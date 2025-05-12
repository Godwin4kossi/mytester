import { useParams } from "react-router-dom";

export default function Products() {
    const { id } = useParams();
    return (
      <div>
        <h1>Product List</h1>
        <p>Showing products with id: {id}</p>
      </div>
    );
}