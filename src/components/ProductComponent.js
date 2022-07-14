import React, {useEffect,useState, useRef} from 'react' 
import { useSelector } from 'react-redux';
import { Card, Image } from 'semantic-ui-react'
import Favored from './Favored'
import BeerModal from './BeerModal'
import '../Page.css';


function ProductComponent({products,favoredMode}) {
    const favoredProducts = useSelector((state)=>state.favored_product)
    const renderedProducts = useRef(products)
    const [favoredChanged, setFavoredChanged] = useState(false)

    if(!Array.isArray(products)){
        let productArr = []
        for (const property in products){
            productArr.push(products[property].product)
      }
      products = productArr
      renderedProducts.current = productArr
    }

    const hasFavoredChanged = () => {
        setFavoredChanged(prev => !prev)
    }
    
    useEffect(() => {
    renderedProducts.current = products
       
    },[favoredProducts,products,favoredChanged])

    const renderList = (items) =>{
        return (
            items.map((product) => {
                const {id, name, image_url, description} = product
                return (
                <Card key={id}>
                    <BeerModal itemData={product}>
                        <Image className='modal_inicator' src={image_url} wrapped ui={false} />
                    </BeerModal>
                    <Card.Content>
                      <Card.Header>{name}</Card.Header>
                      <Card.Description>
                       {description}
                      </Card.Description>
                    </Card.Content>
                    <Favored favoredProduct={!!favoredProducts[id]} product={product} favoredMode={favoredMode} hasFavoredChanged={hasFavoredChanged}  />
                </Card>
            )
            })
        )
    }
  return (
    <>
    {renderedProducts.current?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.current.slice(0,6))} </Card.Group> : ""}
    {renderedProducts.current?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.current.slice(6,12))} </Card.Group> : ""}
    {renderedProducts.current?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.current.slice(12,18))} </Card.Group> : ""}
    {renderedProducts.current?.length > 0 ? <Card.Group itemsPerRow={6}> {renderList(renderedProducts.current.slice(18,24))} </Card.Group> : ""}
    </>
  )
}

export default ProductComponent

