import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import { styles } from './styles'

import { Task } from '../../components/Task'

export function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskName])
        setTaskName('')      

        Alert.alert('Tarefa adicionada')
    }

    function handleTaskRemove(nameTask: string) {
        Alert.alert('Atenção', 'Voce deseja excluir esta tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== nameTask))
            },
            {
                text: 'nao',
                style: 'cancel',
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../../assets/img/logo.png')}
                />
            </View>
            <View style={styles.main}>
                <View style={styles.contentInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        keyboardType='default' // estilo de teclado
                        onChangeText={e => setTaskName(e)} //chama a função set, porem posso passar somente o setParticipantName
                        value={taskName} // recebe o estado limpo
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTaskAdd}
                    >
                        <Image
                            style={styles.imagePlus}
                            source={require('../../../assets/img/plus.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.numberToDo}>
                    <View style={styles.numberToDoList}>
                        <Text style={styles.titleToDoCreated}>Criadas</Text>
                        <Text style={styles.numberToDoCreatedEndConcluded}>${tasks.length}</Text>
                    </View>
                    <View style={styles.numberToDoList}>
                        <Text style={styles.titleToDoConcluded}>Concluídas</Text>
                        <Text style={styles.numberToDoCreatedEndConcluded}>1</Text>
                    </View>
                </View>
                <View style={styles.listTasks}>
                    <FlatList
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            < Task
                                key={item}
                                nameTask={item}
                                onRemove={() => handleTaskRemove(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.listTasks}>
                                <Image
                                    style={styles.listTasksImage}
                                    source={require('../../../assets/img/clipboard.png')}
                                />
                                <Text style={styles.listEmptyText}>
                                    Voce ainda nao tem tarefas cadastradas
                                </Text>
                                <Text style={styles.SubEmptyText}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )


};