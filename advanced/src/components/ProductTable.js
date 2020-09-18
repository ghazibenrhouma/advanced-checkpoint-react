import React from 'react';
import {thTD} from '../App';

const ProductTable = (props) =>  {
    return(props.datas.map((val,i) =>{
            return (
            <tr key={i}>
                <td style = {thTD}>{val.name}</td>
                <td style = {thTD}>{val.price}$</td>
                <td style = {thTD}>{val.category}</td>
            </tr>
            );
            }))
        }
    



export default ProductTable;
