import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId = "309697879738-2hrffrctsto5trts0nl5041igabh6g2r.apps.googleusercontent.com"
  return (
   <>
   <GoogleOAuthProvider clientId={clientId}>
       <AccountProvider>
            <Messanger/>
       </AccountProvider>
    </GoogleOAuthProvider>;

   </>
  );
}

export default App;
