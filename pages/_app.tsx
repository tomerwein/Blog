import { AppProps } from "next/app";
import { AuthProvider } from "./api/auth/authContext";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
