import { productMaximusData } from './maximus';
import { productMobilusData } from './mobilus';
import { productMomentusData } from './momentus';
import { productMagnusData } from './magnus';
import { productAltusData } from './altus-ii';
import { productDurusData } from './durus';

export const productData = {
  maximus: productMaximusData,
  mobilus: productMobilusData,
  momentus: productMomentusData,
  magnus: productMagnusData,
  'altus-ii': productAltusData,
  durus: productDurusData,
};

export async function getProductData(slug) {
  return productData[slug] || null;
}
