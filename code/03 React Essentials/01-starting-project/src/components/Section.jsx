export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
