import react from 'react'
import CardPerfilAnimal from '../../components/CardPerfilAnimal'
import {Container, Foto, Info, Anotacao, Buttons, Text, Categoria} from './style'
import Header from '../../components/Header'
import ButtonsActionsPerfil from '../../components/ButtonsActionsPerfil'
import {getFirestore, doc, deleteDoc} from "firebase/firestore";
import {app} from '../../config/firebase';

export default function PerfilAnimal({route, navigation}:any){

    const db = getFirestore(app)

    
    const { Ppeso, Pcategoria, Pbrinco, PdataNascimento, Pid, Panotacao } = route.params;
    console.log(Pid, Panotacao);

    async function DeletarAnimal(){
        try {
            await deleteDoc(doc(db, "AnimaisAtivos", Pid))
            alert("Animal excluido!")
            navigation.navigate("AnimaisAtivos")
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <Container>
        
            <Header/>
            
            <Foto></Foto>
            <Categoria>{Pcategoria}</Categoria>
            <Info>
                <CardPerfilAnimal title='Brinco' text={Pbrinco} />
                <CardPerfilAnimal title='Peso' text={Ppeso} />
                <CardPerfilAnimal title='Nascimento' text={PdataNascimento} />
            </Info>
            <Anotacao> 
            <Text>{Panotacao}
            </Text> 
            </Anotacao>
   
            <Buttons>
            <ButtonsActionsPerfil type='alterar' cardName='Alterar' onPress={()=>navigation.navigate("AlterarDadosAnimal", {Pbrinco:Pbrinco, Ppeso: Ppeso, Pcategoria:Pcategoria, Pid:Pid, PdataNascimento:PdataNascimento, Panotacao:Panotacao })} />
            <ButtonsActionsPerfil type='exlcuir' cardName='Excluir' onPress={DeletarAnimal} />
            </Buttons>

        </Container>
    )
}