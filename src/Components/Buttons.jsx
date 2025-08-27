export default function Button({ clickButtonTitle, onClickFunction }) {
  return (
    <div>
      <button onClick={onClickFunction}>{clickButtonTitle}</button>
    </div>
  );
}
