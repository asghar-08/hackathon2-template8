import prodcut1 from "@/public/products/Image-1.png";
import prodcut2 from "@/public/products/Image-2.png";
import prodcut3 from "@/public/products/Image-3.png";
import prodcut4 from "@/public/products/Image-4.png";
import ProductsCard from "./products-card";
import Button from "./button";

export default function SingleFeaturedProducts() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-3 mb-6">
            <div className="flex justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mt-2">Featured Products</h2>
            <Button title="View All" href="/all-products" />
            </div>
            {/* 4colums grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6 mb-10">
                {/* products card component */}
                <ProductsCard image={prodcut1} title="Library Stool Chair" price={20} salePrice={30} label="New" labelcolor="bg-softGreen"/>
                <ProductsCard image={prodcut2} title="Library Stool Chair" price={20}  />
                <ProductsCard image={prodcut3} title="Library Stool Chair" price={10} salePrice={30} label="-10%"/>
                <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} salePrice={50} label="-40%"/>
                <ProductsCard image={prodcut4} title="Library Stool Chair" price={30} salePrice={50} label="-40%"/>
                
                
            </div>

        </div>
    );
}