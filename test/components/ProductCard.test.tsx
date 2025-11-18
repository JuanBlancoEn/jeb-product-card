import React from "react";
import {render} from '@testing-library/react'
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('ProductCard', ()=> {

    test('Debe mostrar el componente correctamente', ()=> {

        const {asFragment} = render(<ProductCard product={product1}>
            {
                ()=> (
                    <h1>Product Card</h1>
                )
            }
        </ProductCard>);
        expect(asFragment()).toMatchSnapshot();
    });

    // test('Debe incrementar el contador', ()=> {

    //     const {asFragment} = render(<ProductCard product={product1}>
    //         {
    //             ({count, increaseBy})=> (
    //                 <>
    //                 <h1>Product Card</h1>
    //                 <span>{count}</span>
    //                 <button onClick={()=>increaseBy(1)}></button>
    //                 </>
    //             )
    //         }
    //     </ProductCard>);

    //     console.log(asFragment.toString())
    // });
})