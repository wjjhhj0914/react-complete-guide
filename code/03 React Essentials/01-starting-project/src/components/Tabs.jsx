export default function Tabs({
  children,
  buttons,
  buttonsContainer: ButtonsContainer = 'menu',
}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
