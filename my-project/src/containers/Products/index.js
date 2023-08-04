import './style.css'
import { useEffect, useState } from 'react'

import Table from '../../components/Table/';
import HeaderLogo from '../../components/HeaderLogo/';
import {API_URL} from '../../constans/'

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch(`${API_URL}/products/`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
   
    return (
        <div>
            <HeaderLogo />
            <h1 className='title'>Products</h1>
            <div className="container_product_table">
                <Table data={products} />
            </div>       
        </div>
    )
}

export default Products;