import React from 'react'
import {OverlayTrigger, Popover} from 'react-bootstrap';
import '../Page.css';

const createString = (arr1, title) =>{
  let str = `${title}: `
  for (const item of arr1){
    str += `${item.name}, `
  }
  return str.slice(0, -2)
}

function ProductComponent({products}) {

  
  return (
    <div className='container' style={{"paddingTop": "160px"}} >
      <div className='row row-cols-sm-1 row-cols-xxl-2'>
          {products.map((product) => {
            const {id, name, image_url, description, tagline,ingredients} = product
            const {hops, malt} = ingredients
            const ingredientsString1 = createString(hops, "Hops")
            const ingredientsString2 = createString(malt, "Malt")
            return (
        <div  key={id} className=" d-flex align-items-stretch">
          <div className="card mb-3 cardEl"  style={{"maxWidth": "840px"}}>
            <div className="row g-2" >
              <div className="col-md-2"  >
              <OverlayTrigger
                trigger="hover"
                placement='top-start'
                overlay={
                  <Popover id={`popover-positioned-top${id}`}  >
                    <Popover.Header  as="h3" className="popoverTitle" >Ingredients </Popover.Header>
                    <Popover.Body>
                      <div className="popover" >{ingredientsString1}</div>
                      <div className="popover" >{ingredientsString2}</div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <img src={image_url} className="img-fluid align-middle pt-lg-4 ml-lg-2 pt-xl-5 ml-xl-3 pt-xm-1" alt={name} width="30%" height="auto"
                style={{"maxHeight": "80%"}}
                />
                </OverlayTrigger>
              </div>
              <div className="col-md-10" >
                <div className="card-body">
                  <h5 className="card-title text-start" >{name}</h5>
                  <h6 className="card-title text-start text-warning" >{tagline}</h6>
                  <p className="card-text text-start" >{description.slice(0,253)}</p>
                </div>
              </div>
            </div>
          </div>
         </div>       
                
             
            )
          })}
        </div>
      </div>
  )
}

export default ProductComponent

