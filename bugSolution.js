```javascript
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: deep comparison using JSON.stringify
    if (JSON.stringify(props.data) !== JSON.stringify(prevProps.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```