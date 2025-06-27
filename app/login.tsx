import { useContext } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const authContext = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Text>Login Screen</Text>
      <Button title="Log in!" onPress={authContext.logIn} />
    </SafeAreaView>
  );
}
