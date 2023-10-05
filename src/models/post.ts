import { StringObject } from "./stringObject";
import { Image } from "./image";
export default interface Post {
    id : string
    title : string;
    name : string;
    parent : number;
    content :string;
    status : "publish"| "not_published";
    password : string; 
    menuOrder : number;
    date : string;
    //admin id
    author : number;
    commentStatus : "open"| "closed"
    sku : string;
    //should be removed
    parentSku : string;
    children :  string
    downloadable : boolean;
    virtual : boolean;
    stock : number;
    regularPrice : number;
    salePrice : number; 
    weight : string;
    length : number; 
    width :number;
    height :number;
    taxClass : number
    visibility : string;
    stockStatus : "instock"|"outofstock" ;
    backorders : boolean ;
    soldIndividually : boolean ; 
    lowStockAmount : number ;
    manageStock :boolean ;
    taxStatus : "none"| "taxable";
    salePriceDatesFrom : string ;
    salePriceDatesTo : string ;
    images : Image[] ;
    downloadableFiles : string[];
    productPageUrl : string ;
    totalSales : number;
    brand : string ;
    type: string;
    //enter visibility options
    visiblility : "visible";
    category : string[];
    tags : string[]
    warrantyKey : string;
    warrantyValue : string ;
    extraAttributes : StringObject; 

}