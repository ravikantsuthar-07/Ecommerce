import React from 'react'
import UserLayout from '../Components/Layouts/Buyers/UserLayout'
import BreadthList from '../Components/BreadthList'
import ProductShowCard from '../Components/ProductShowCard';

const ProductPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/", icon: "fa-solid fa-house" },
        { label: "All Products" },
    ];

        const products = [
        {
            name: "Cardamom 8mm इलायची",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Green-Cardamom.jpg",
            price: { min: 230, max: 2150 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Black Pepper (काली मिर्च)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Black-Pepper.jpg",
            price: { min: 130, max: 620 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Cinnamon Rolls (दालचीनी के रोल्स)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Cinnamon-Rolls.jpg",
            price: { min: 120, max: 550 },
            rating: 5,
            discount: 20,
        },
        {
            name: "Kerala Cloves 1st Quality (लौंग)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Clove.jpg",
            price: { min: 180, max: 800 },
            rating: 5,
            discount: 49,
        },
        {
            name: "Cardamom 8mm इलायची",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Green-Cardamom.jpg",
            price: { min: 230, max: 2150 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Black Pepper (काली मिर्च)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Black-Pepper.jpg",
            price: { min: 130, max: 620 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Cinnamon Rolls (दालचीनी के रोल्स)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Cinnamon-Rolls.jpg",
            price: { min: 120, max: 550 },
            rating: 5,
            discount: 20,
        },
        {
            name: "Kerala Cloves 1st Quality (लौंग)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Clove.jpg",
            price: { min: 180, max: 800 },
            rating: 5,
            discount: 49,
        },
        {
            name: "Cardamom 8mm इलायची",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Green-Cardamom.jpg",
            price: { min: 230, max: 2150 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Black Pepper (काली मिर्च)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Black-Pepper.jpg",
            price: { min: 130, max: 620 },
            rating: 5,
            discount: 27,
        },
        {
            name: "Cinnamon Rolls (दालचीनी के रोल्स)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Cinnamon-Rolls.jpg",
            price: { min: 120, max: 550 },
            rating: 5,
            discount: 20,
        },
        {
            name: "Kerala Cloves 1st Quality (लौंग)",
            category: "Whole Spices",
            image: "https://www.keralaspicesonline.com/wp-content/uploads/2022/08/Clove.jpg",
            price: { min: 180, max: 800 },
            rating: 5,
            discount: 49,
        },
    ];

    return (
        <UserLayout>
            <BreadthList items={breadcrumbItems} />

            <div className="container my-5">
                <div className="row">
                    {products.map((item, index) => (
                        <ProductShowCard key={index} product={item} />
                    ))}
                </div>
            </div>
        </UserLayout>
    )
}

export default ProductPage
