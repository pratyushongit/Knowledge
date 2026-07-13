import CCApp from "./utils/currency-converter/CCApp";
import Pound from "./utils/currency-converter/Pound";
import USD from "./utils/currency-converter/USD";

const Currency = () => {
  const renderCurrency = (amount) => (
    <div>
      <p>
        USD: <USD amount={amount} />
      </p>
      <p>
        Pound: <Pound amount={amount} />
      </p>
    </div>
  );

  return <CCApp render={renderCurrency} />;
};

export default Currency;
