import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

type Props = {
    nameTask: string
    onRemove: () => void
}

export function Task({ nameTask, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {nameTask}
            </Text>       
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
        </View>
        
        )
}