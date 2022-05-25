import React from 'react'
import konzum from './../banners/konzum.jpg';
import bauhaus from './../banners/bauhaus.jpg';
import lidl from './../banners/lidl.png';
import spar from './../banners/spar.jpeg'
import plodine from './../banners/plodine.png'
import mlinar from './../banners/mlinar.png';
import classes from "../styles/Shops.module.scss";

export const ShopsComponent = () => {
  return (
    <div className={classes.container}>
        
        <ul>
            <li>
                <a href='https://www.konzum.hr/katalozi/'><img src={konzum} alt = "konzum" className={classes.card} /></a>
             </li>

             <li>
                <a href='https://www.lidl.hr/informacije-za-kupce/katalog'><img src={lidl} alt = "lidl" className={classes.card} /></a>
             </li>

             <li>
                <a href='https://www.spar.hr/ponuda'><img src={spar} alt = "spar" className={classes.card} /></a>
             </li>

        </ul>

        <ul>
            <li>
                <a href='http://www.plodine.hr/aktualna-ponuda/katalozi/'><img src={plodine} alt = "plodine" className={classes.card} /></a>
             </li>

             <li>
                <a href='http://www.catalog.hr/tvrtke/bauhaus-7'><img src={bauhaus} alt = "bauhaus" className={classes.card} /></a>
             </li>

             <li>
                <a href='https://mlinar.hr/category/proizvodi/'><img src={mlinar} alt = "mlinar" className={classes.card} /></a>
             </li>

        </ul>
    
    </div>
  )
}

export default ShopsComponent