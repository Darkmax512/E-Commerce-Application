import axios from "axios";
import React from "react";

const CategoryForm = () => {
   const submitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      try {
         const category = await axios.post("http://localhost:5000/api/v1/categories", formData, {
            withCredentials: true,
         });
         console.log(category);
      } catch (error) {
         console.log(error.response.data);
      }
   };
   return (
      <div className="container mx-auto max-w-7xl py-10 sm:mt-12 ">
         <h3 className="mb-7 text-3xl font-bold">Create Category</h3>
         <form onSubmit={submitHandler} className="flex flex-col justify-center gap-4 space-y-5 rounded-2xl border-2 py-10 px-3 sm:px-10">
            <div className="flex items-center space-x-2 sm:space-x-4">
               <label htmlFor="cat-name" className="w-20">
                  Name:
               </label>
               <input type="text" id="cat-name" name="name" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
               <label htmlFor="cat-description" className="w-20">
                  Description:
               </label>
               <textarea id="" name="description" rows="2" cols="20" className=" w-60  rounded-md focus:border-black/50 focus:ring-black/50"></textarea>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
               <label htmlFor="cat-Image" className="w-20">
                  Image:
               </label>
               <input type="file" id="cat-Image" name="image" className="w-60  rounded-md border border-gray-300 bg-white  text-sm font-medium  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black/50 focus:ring-offset-1" />
            </div>
            <div className="flex items-center justify-start space-x-2 sm:space-x-4">
               <label htmlFor="cat-featured" className="w-20">
                  Featured:
               </label>
               <div className="w-60">
                  <input type="checkbox" value={true} id="cat-featured" name="featured" className=" ring-2" />
               </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
               <label htmlFor="cat-name" className="w-20">
                  Order:
               </label>
               <input type="text" id="cat-name" name="order" className="mt-1 block w-60  rounded-md border-gray-500 shadow-sm focus:border-black/50 focus:ring-black/50 sm:text-sm" />
            </div>

            <div className="flex justify-end pt-5">
               <button type="submit" className=" w-32 cursor-pointer rounded-md border border-transparent bg-black px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:bg-gray-400">
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default CategoryForm;
