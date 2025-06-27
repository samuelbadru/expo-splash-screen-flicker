import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Index() {
  const authContext = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Text>Home Tab </Text>
      <Button title="Log out!" onPress={authContext.logOut} />
    </View>
  );
}
