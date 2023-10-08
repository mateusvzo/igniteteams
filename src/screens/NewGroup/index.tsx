import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Icon } from "./styles";

import { groupCreate } from '@storage/group/groupCreate';

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handlePlayer(){
    try {
      await groupCreate(group)
      navigation.navigate('players', { group });
      
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="criar uma turma para adicionar pessoas."
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button title="Criar" style={{ marginTop: 20 }}  onPress={handlePlayer}/>
      </Content>
    </Container>
  );
}
