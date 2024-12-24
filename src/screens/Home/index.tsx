import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { s } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  const [isButtonAddDisabled, setIsButtonAddDisabled ] = useState(false)
  
  function handleParticipantAdd() {
    if(participantName == "" ) {
      Alert.alert("Participante", "Nome do participante está vazío, favor verificar.")
      return
    }
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome.")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Você clicou em remove participante ${name}`)
  }

  useEffect(
    ()=>setIsButtonAddDisabled( participantName == "" ? true : false )
  ,[participantName])


  return (
    <View style={s.container}>
      <Text style={s.eventName}>
        Nome do evento
      </Text>
      <Text style={s.eventDate}>
        Sexta, 4 de Novembro de 2024
      </Text>

      <View style={s.form}>
        <TextInput 
          style={s.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity 
          style={[s.button, {opacity: isButtonAddDisabled ? 0.5 : 1}]} 
          onPress={handleParticipantAdd} 
          disabled={isButtonAddDisabled}
        >
          <Text style={s.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants} 
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <Participant 
            name={item} 
            onRemove={()=>handleParticipantRemove(item)}
            key={index}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={s.listEmptyText}>
            Nínguem chegou no evento ainda? Adicione participante a sua lista de presença.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index)=>{
            return (
              <Participant 
                name={participant} 
                onRemove={()=>handleParticipantRemove(participant)}
                key={index}
              />
            )
          })
        }
      </ScrollView> */}

    </View>
  )
}