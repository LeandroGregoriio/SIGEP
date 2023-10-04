import react from 'react'
import {Text, View} from './style'
import {Modal, ActivityIndicator, AccessibilityInfo} from 'react-native'

export default function Bemvindo({visible}:any){
    return(
        <Modal visible={visible} transparent>
        <View>
        <Text>Bem vindo!</Text>
        <ActivityIndicator color={'#fffff'} size='large'  />
        </View>
    </Modal>
    )
    
}