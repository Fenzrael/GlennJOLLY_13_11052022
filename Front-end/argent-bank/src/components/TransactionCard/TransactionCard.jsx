import "./TransactionCard.css";

const TransactionCard = (props) => {
  return (
    <section className="account">
      <div className="account__contentWrapper">
        <h3 className="account__title">{props.title}</h3>
        <p className="account__amount">{props.amount}</p>
        <p className="account__amountDescription">{props.description}</p>
      </div>
      <div className="account__contentWrapper cta">
        <button className="account__transactionButton">
          View transactions
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </section>
  );
};

export default TransactionCard;
