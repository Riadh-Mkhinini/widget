const Widget = ({ id }: { id?: string }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "1em",
      fontFamily: "sans-serif",
    }}
  >
    <h3>📦 Bookini Widget</h3>
    <p>Hello from embedded React!</p>
    <p>
      Loaded with ID: <strong>{id}</strong>
    </p>
  </div>
);

export default Widget;
// This is the function that the host page will call
// export function initWidget(container: HTMLElement, options?: { id?: string }) {
//   const root = ReactDOM.createRoot(container);
//   root.render(<Widget id={options?.id} />);
// }
