import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'


import '../Page.css';
import ProductComponent from './ProductComponent';



function ProductListing() {
    const [products, setProducts] = useState([])
    const page = useRef(1)
    const ITEM_PER_PAGE = 10

    const baseURL = "https://api.punkapi.com/v2/beers"
    const badImage = "https://images.punkapi.com/v2/keg.png"
    const altImage = "https://images.punkapi.com/v2/91.png"

    const handlePageBtnClick = async () => {
            page.current = page.current + 1
            const {data} = await axios.get(`${baseURL}?page=${page.current}&per_page=${ITEM_PER_PAGE}`).catch((err) => {
                console.log("error",err)
            })
            data.map((item) =>  item.image_url === badImage ? item.image_url = altImage : "" )
            setProducts(prevData => [...prevData,...data])
    }

    
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${baseURL}?page=${page.current}&per_page=${ITEM_PER_PAGE}`).catch((err) => {
                console.log("error",err)
            })
            data.map((item) =>  item.image_url === badImage ? item.image_url = altImage : "" )
            setProducts(data)
        }
        
        fetchProducts(page)
        return () => {
            
          };
    },[page])
  return (
    <div className='container'>
        <ProductComponent  products={products} />
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handlePageBtnClick()} 
            >Load More</button>
        </div>
        
  )
}

export default ProductListing