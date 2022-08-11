import { useEffect } from 'react';
import { Header, Product } from 'components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getProducts } from 'store/slices/productSlice';

export const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // const { cart, products } = useAppSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '48px',
        }}
      >
        {/* {products.length > 0 &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))} */}
      </div>
    </div>
  );
};
