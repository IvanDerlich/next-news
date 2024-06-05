export default function layout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
