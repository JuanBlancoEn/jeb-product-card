import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
    id: '1',
    title: 'Coffee Mug - Card!',
    // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard 
       product={ product }
       initialValues={{
           count: 4,
           maxCount: 10
       }}
>
       {
           ({reset, increaseBy, count, isMaxCountReached, maxCount})=> (
               <>
                   <ProductImage />
                   <ProductTitle />
                   <ProductButtons />
               </>
           )
       }
                    
</ProductCard>
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);

