import { Header, Product, PaymentGateway } from 'components';
import { useAppSelector } from 'store/hooks';

export const Cart: React.FC = (): JSX.Element => {
  const { cart, products } = useAppSelector((state) => state.product);

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

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
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>

      <div style={{ width: '80%', margin: 'auto' }}>
        <hr style={{ marginTop: '16px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '20px',
          }}
        >
          <span style={{ marginRight: '16px' }}>
            Subtotal ({totalQty}) items:
          </span>
          <span style={{ fontWeight: 500, marginBottom: '48px' }}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        {totalQty > 0 && <PaymentGateway />}
      </div>
    </div>
  );
};
