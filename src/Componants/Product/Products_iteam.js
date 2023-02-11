import '../Footer/Footer.css'
import Productdata from '../Data';
import { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
export function Products_iteam() {
    const[visible ,setVisible] =useState(6);
    const showMoreiteams =() =>{
   setVisible(preValue => preValue + 3);
    }
  return (
  

    <>
   <div className="section1">
    <div className="section1unun1">
    <div className="container">
        <div className="row">
           <div className="col-md-12">
            <div className="sectionmnheading">
                <h1>Buy-Products</h1>
            </div>
           </div>
            {Productdata.slice(0, visible).map((iteamdata,dataky ) => (
                <div className="col-md-4 my-md-4 my-3" key={dataky}>
                <div className="section1unun2">
                <div className="itemunpadd">
               
                    <div className="image">
                    <img src={iteamdata.image} alt="" className='img-fluid' />
                    </div>
                    <div className="content1">
                        <div className="nameproduct">
                            <h4>{iteamdata.product_name}</h4>
                            <p>{iteamdata.price}</p>
                            <h5 className='productcontenttext'>{iteamdata.product_contant}</h5>
                            <button type="button"   class="btn btn-primary btnproduct">Buy Now</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
                   
                </div>
            ))}
            <div className="col-md-12 text-aline">
            <button type="button"  onClick={showMoreiteams} class="btn btn-primary btnproduct3  ">More item</button>
            </div>


            </div>
        </div>
    </div>
   </div>
    </>
  );
}
