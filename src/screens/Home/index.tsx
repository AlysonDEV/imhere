import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Participant } from "../../components/Paricipant";

export function Home () {


  function handlePartipantAdd() {
    console.log("Você clicou no botão de adcionar")
  }

  function handleParticpantRemove(name: string){
    // console.log("Você clicou no botão de remover " + name)
    console.log(`Você em remover o participante ${name}`)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante" 
          placeholderTextColor="#6B6B6B" 
          keyboardAppearance="dark"
        />
        <TouchableOpacity style={styles.button} onPress={handlePartipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Rodrigo" onRemove={()=>handleParticpantRemove("Rodrigo")} />
      <Participant name="Diego" onRemove={()=>handleParticpantRemove("Rodrigo")}/>
      <Participant name="Vini" onRemove={()=>handleParticpantRemove("Rodrigo")} />
      <Participant name="Biro" onRemove={()=>handleParticpantRemove("Rodrigo")}/>

      <StatusBar style='light' />
    </View>
  )
}
