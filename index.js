const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <div>
      <h1 className="boxheading">Boxes</h1>
      <div className="result-container">
        <Box text="Small" className="smallBoxCss" />
        <Box text="Medium" className="MediumBoxCss" />
        <Box text="Large" className="LargeBoxCss" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
