import React from 'react'
import { View, Modal, ActivityIndicator} from 'react-native'

export default function Loading({visible}:any){
    return(
    <Modal transparent visible={visible} >
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'} }>
            <ActivityIndicator size="large" color="#188A89" animating={true} />
        </View>
    </Modal>
    )

}