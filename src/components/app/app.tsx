import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import React from 'react';

type AppScreenProps = {
  flatCount: number;
}

function App({ flatCount }: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen flatCount={flatCount} />
  );
}

export default App;
