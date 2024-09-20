import { Body, Counter } from '.';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Body name='Alex' age={35} />
      <Counter />
    </div>
  );
};
