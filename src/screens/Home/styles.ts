import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      paddingTop: 24      
    },
    // Header
    header: {
      width: '100%',
      height: '20%',
      backgroundColor: '#0D0D0D',
      alignItems: 'center',
      justifyContent: 'center',     
    },
    imageLogo: {
      width: '30%',
    },
    //  Main
    main:{
      width: '100%',
      paddingLeft: 24,
      paddingRight: 24,  
    },
    //  Input
    contentInput: {
      width: '100%',
      flexDirection: 'row',
      marginTop: -24,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      width: '100%',
      height: 54,
      backgroundColor: '#262626',
      color: '#FFFFFF',
      marginRight: 5,
      borderRadius: 10,
      padding: 16,
      fontSize: 16, 
    },
    button: {
      width: 58,
      height: 54,
      backgroundColor: '#1E6F9F',
      borderRadius: 10,
    },
    imagePlus: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    // View toDo
    numberToDo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }, 
  numberToDoList: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
    titleToDoCreated: {
      color: '#4EA8DE',
      fontSize: 14,
      fontWeight: 'bold',
    },
    titleToDoConcluded: {
      color: '#8284FA',
      fontSize: 14,
      fontWeight: 'bold',
    },
    numberToDoCreatedEndConcluded: {
      backgroundColor: '#333',
      color: '#D9D9D9',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:1,
      paddingBottom:1,
      marginLeft: 10,
      textAlign: 'center',
      borderRadius: 10,
    },
    listTasks: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listTasksImage: {
      marginTop: 50,
      width: 56,
      height: 56,
      marginBottom: 16,
    },
    listEmptyText: {
      fontSize: 16,
      color: '#808080',
      fontWeight: 'bold',
      marginBottom: 5
    },
    SubEmptyText: {
      fontSize: 16,
      color: '#808080',
    }
});