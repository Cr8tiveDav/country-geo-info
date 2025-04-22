import AppProvider from './context';
import InputProvider from './InputContext';

const ContextProvider = ({ children }) => {
  return (
    <AppProvider>
      <InputProvider>{children}</InputProvider>
    </AppProvider>
  );
};
export default ContextProvider;
