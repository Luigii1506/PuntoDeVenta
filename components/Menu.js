import React from "react";
import CardProduct from "./CardProduct";

const Menu = ({ products }) => {
    return (
        <div className="grid grid-cols-4 gap-y-5">
            {products.map((product, index) =>
                <CardProduct key={index} product={product} />
            )}
        </div>
    );
}

export default Menu;
