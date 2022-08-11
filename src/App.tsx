import React from 'react';

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }): JSX.Element => {
  return <div>App</div>;
};
