import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

type Props = {
  name: string
  onRemove: ()=>void
}

export function Participant({name, onRemove}: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{name}</Text>
      <TouchableOpacity style={s.button} onPress={onRemove} >
        <Text style={s.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}