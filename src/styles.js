
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop: {
        alignItems: 'flex-start',
    },
    credentials: {
        height: 40,
        width: 335,
        margin: 12,
        padding: 10,
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        borderRadius: 5,
        color: 'black'
    },
    CredentialsInput: {        
        backgroundColor: 'lightgray',        
        borderWidth: 1,
        fontWeight: 'normal'
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    button: {
        height: 50,
        padding: 5,
        backgroundColor: 'blue',
        justifyContent: "center"
    },
    image:{
        width: '95%',
        height: undefined,
        aspectRatio: 1,
    },
    item:{
        backgroundColor: 'lightgray',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemImage:{
        width: '60',
        height: undefined,
        aspectRatio: 1,
    },
    title:{
        fontSize: 13,
        color: "black",
        fontWeight: 'bold'
    }
});

export default styles