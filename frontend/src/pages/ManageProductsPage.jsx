import { useEffect, useState } from "react";
import { getProducts,addProduct,updateProduct,deleteProduct,} from "../api/productApi";

import mandua from "../assets/image/mandua.jpg";
import honey from "../assets/image/honey.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import amla from "../assets/image/amla.jpg";


function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

const [newProduct, setNewProduct] = useState({
  id: "",
  name: "",
  price: "",
  category: "",
  description: "",
});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      console.log("Products:", data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getImage = (name) => {
  switch (name.toLowerCase()) {
    case "mandua flour":
      return mandua;

    case "jhangora":
      return jhangora;

    case "red rice":
      return redrice;

    case "pahadi rajma":
      return rajma;

    case "himalayan honey":
      return honey;

    case "natural amla candy":
      return amla;

    default:
      return mandua;
  }
};

  const handleAddProduct = async () => {
  try {
    await addProduct({
      id: Number(newProduct.id),
      name: newProduct.name,
      price: Number(newProduct.price),
      category: newProduct.category,
      description: newProduct.description,
    });

    setShowModal(false);

    setNewProduct({
      id: "",
      name: "",
      price: "",
      category: "",
      description: "",
    });

    loadProducts();

    alert("Product Added Successfully");
  } catch (err) {
    console.log(err);
    alert("Unable to add product");
  }
};

const handleEditClick = (product) => {
  setEditMode(true);

  setNewProduct({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
  });

  setShowModal(true);
};

const handleUpdateProduct = async () => {
  try {

    await updateProduct(newProduct.id, {
      id: Number(newProduct.id),
      name: newProduct.name,
      price: Number(newProduct.price),
      category: newProduct.category,
      description: newProduct.description,
    });

    loadProducts();

    setShowModal(false);

    setEditMode(false);

    setNewProduct({
      id: "",
      name: "",
      price: "",
      category: "",
      description: "",
    });

    alert("Product Updated Successfully");

  } catch (err) {
    console.log(err);
    alert("Update Failed");
  }
};

const handleDeleteProduct = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {

    await deleteProduct(id);

    loadProducts();

    alert("Product Deleted Successfully");

  } catch (err) {

    console.log(err);

    alert("Delete Failed");

  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Manage Products
        </h1>

        <button  onClick={() => setShowModal(true)}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
        + Add Product
        </button>

      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <table className="w-full border-separate border-spacing-y-3">

      <thead>
        <tr className="bg-green-600 text-white rounded-xl">
          <th className="p-4 rounded-l-xl">Image</th>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Status</th>
          <th className="rounded-r-xl">Actions</th>
        </tr>
      </thead>
          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b text-center"
              >
                <td className="p-4">
                  <img src={getImage(product.name)}
                    alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover mx-auto"
                  />
                </td>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>
                <td className="text-center">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                   </span>
                </td>


                <td className="py-5">
            <div className="flex justify-center gap-3">

        <button
         onClick={() => handleEditClick(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
       >
      Edit
    </button>

    <button
      onClick={() => handleDeleteProduct(product.id)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
    >
      Delete
    </button>

  </div>
</td>

          </tr>
            ))}

          </tbody>

        </table>

      </div>
          {showModal && (

    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

    <div className="bg-white rounded-2xl p-8 w-[500px]">  

        <h2 className="text-3xl font-bold mb-6">
        {editMode ? "Edit Product" : "Add Product"}
        </h2>

      <div className="space-y-4">

    <input placeholder="Product ID" value={newProduct.id}
      onChange={(e)=>setNewProduct({...newProduct,id:e.target.value})}
      className="w-full border rounded-lg p-3"
    />

    <input placeholder="Product Name" value={newProduct.name}
      onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
      className="w-full border rounded-lg p-3"
    />

    <input placeholder="Price" value={newProduct.price}
      onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
      className="w-full border rounded-lg p-3"
    />

    <input placeholder="Category" value={newProduct.category}
      onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})}
      className="w-full border rounded-lg p-3"
    />

    <textarea placeholder="Description" value={newProduct.description}
      onChange={(e)=>setNewProduct({...newProduct,description:e.target.value})}
      className="w-full border rounded-lg p-3"
    />

    <div className="flex justify-end gap-4 mt-6">

    <button onClick={() => {
  setEditMode(false);

  setNewProduct({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  setShowModal(true);
}}
      className="px-5 py-2 rounded-lg border"
    >
      Cancel
    </button>

    <button  onClick={editMode ? handleUpdateProduct : handleAddProduct}
      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
    >
     {editMode ? "Update Product" : "Add Product"}
    </button>

    </div>

    </div>

    </div>

    </div>

)}
    </div>
  );
}

export default ManageProductsPage;

