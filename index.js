const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div>
    <h1>Social Buttons</h1>
    <div>
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Share" className="share-button" />
      <Button buttonText="Comment" className="comment-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
