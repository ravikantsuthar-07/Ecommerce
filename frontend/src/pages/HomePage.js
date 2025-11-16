import React from 'react'
import UserLayout from '../Components/Layouts/Buyers/UserLayout'
import ProductShowCard from '../Components/ProductShowCard';
import CategoryCard from '../Components/CategoryCard';
import axios from 'axios';

const HomePage = () => {

    const [categoryList, setCategoryList] = React.useState([]);

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
    ];

    const gettingMainCategories = async () => {
        try {
            const { data } = await axios.get("/api/category/getMainCategory");
            if (data?.success) {
                setCategoryList(data.category);
            } else {
                console.error("Failed to fetch categories");
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        gettingMainCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        return (
            <UserLayout>
                <div className="container my-4">
                    <div className="row">
                        {categoryList.map((item, index) => (
                            <div
                                key={index}
                                className="col-3 col-md-2 col-xl-1 d-flex justify-content-center"
                            >
                                <CategoryCard image={item.image} title={item.name} id={item?._id} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container my-5">
                    <h3 className="text-center fw-bold mb-4 text-warning">
                        Spices and Masala
                    </h3>
                    <div className="row">
                        {products.map((item, index) => (
                            <ProductShowCard key={index} product={item} />
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-outline-success">
                            <i className="bi bi-box-arrow-down"></i> More Products here
                        </button>
                    </div>
                </div>
            </UserLayout>
        )
    }

    export default HomePage
