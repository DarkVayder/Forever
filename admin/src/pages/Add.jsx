import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Token is missing. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      toast.success("Product added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleSizeToggle = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };

  return (
    <div className="add-product-container">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-full gap-5 items-start"
      >
        <ToastContainer />

        {/* Image Upload */}
        <div>
          <p className="mb-2 font-semibold text-gray-700">Upload Image</p>
          <div className="flex gap-4">
            {[image1, image2, image3, image4].map((image, index) => (
              <label
                key={index}
                htmlFor={`image${index + 1}`}
                className="cursor-pointer"
              >
                <img
                  className="w-20 h-20 object-cover border rounded-md"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt={`Upload ${index + 1}`}
                />
                <input
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                  onChange={(e) => {
                    const setters = [setImage1, setImage2, setImage3, setImage4];
                    setters[index](e.target.files[0]);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full">
          <p className="mb-2 font-semibold text-gray-700">Product Name</p>
          <input
            className="w-full max-w-lg px-3 py-2 border rounded-md"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2 font-semibold text-gray-700">Product Description</p>
          <textarea
            className="w-full max-w-lg px-3 py-2 border rounded-md"
            placeholder="Write content here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <p className="mb-2 font-semibold text-gray-700">Product Category</p>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className="w-full">
            <p className="mb-2 font-semibold text-gray-700">Sub-Category</p>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="Topwear">Top wear</option>
              <option value="Bottomwear">Bottom wear</option>
              <option value="Winterwear">Winter wear</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-2 font-semibold text-gray-700">Product Price</p>
          <input
            className="w-full max-w-lg px-3 py-2 border rounded-md"
            type="number"
            placeholder="25"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Product Sizes */}
        <div className="w-full">
          <p className="mb-2 font-semibold text-gray-700">Product Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`px-3 py-1 border rounded-md cursor-pointer ${
                  sizes.includes(size)
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleSizeToggle(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="bestseller"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
          />
          <label htmlFor="bestseller" className="cursor-pointer text-gray-700">
            Add to Bestseller
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

// PropTypes validation
Add.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Add;
