import { Button } from "react-native";
function NewButton() {
  return (
    <Button
      title="눌러보세요"
      onPress={() => {
        alert("바보");
      }}
    ></Button>
  );
}

export default NewButton;
