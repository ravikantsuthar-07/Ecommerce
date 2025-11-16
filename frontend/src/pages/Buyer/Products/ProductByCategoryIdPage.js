import React from 'react'
import UserLayout from '../../../Components/Layouts/Buyers/UserLayout'
import ProductShowCard from '../../../Components/ProductShowCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BreadCrumbCom from '../../../Components/BreadCrumbCom';

const ProductByCategoryIdPage = () => {
    const { mcn, scn } = useParams();
    const [productList, setProductList] = React.useState([]);
    const gettingProductsByCategoryId = async () => {
        try {
            const { data } = await axios.get(`/api/products/byCategory/${scn}`);
            if (data?.success) {
                setProductList(data.products);
            } else {
                console.error("Failed to fetch products");
            }
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        gettingProductsByCategoryId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <UserLayout>
            <Container className="my-3">

                <BreadCrumbCom
                    paths={[
                        { label: mcn, to: `/cn/${mcn}`, isSlug: true },
                        { label: scn, isSlug: true }
                    ]}
                />


                <div className="row">
                    {productList.map((item, index) => (
                        <ProductShowCard key={index} product={item} />
                    ))}
                </div>
            </Container>
        </UserLayout>
    )
}

export default ProductByCategoryIdPage
