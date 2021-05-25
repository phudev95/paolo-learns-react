const code = `
export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button type="button" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  );
};
`;

export default code;
