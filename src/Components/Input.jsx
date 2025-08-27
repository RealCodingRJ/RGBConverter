export default function Input({ placeHolder, value }) {
  return (
    <div>
      <input onChange={value} placeholder={placeHolder} />
    </div>
  );
}
