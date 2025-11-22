import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json").then((res) => 
res.json());

const Catagories = () => {

    // console.log(categoryPromise);
    const categories = use(categoryPromise);

    return (
        <div>
              <h3 className='font-bold'>All catagories ({categories.length}) </h3>
              <div className='grid grid-cols-1 gap-3  mt-5'>
                { 
                    categories.map((category) => (
                        <NavLink to={`/category/${category.id}`} className={"btn bg-base-10 text-accent font-semibold  border-0 hover:bg-base-200"} key={category.id}>{category.name}</NavLink>
                    ))  
                }
                </div> 
        </div> 
    );
};

export default Catagories;