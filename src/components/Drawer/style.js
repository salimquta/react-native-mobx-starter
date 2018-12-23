import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    label: {
        backgroundColor: 'yellow',
        fontSize: 20,
        marginRight: 30,
        alignItems: 'center',
        flex: 1
    },
    view: {
        marginTop: 50,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'red'
    },
    text: {
        padding: 10,
        backgroundColor: 'blue',
        marginTop: 10,
    },
    avatar: {
        alignItems: 'center',
        backgroundColor: 'gray',
        flex: 1
        // flexDirection: 'column',
    },
    avatarThmb: {
        justifyContent: 'center',

    },
    listItem: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        // flex : 1,
        // flexDirection: 'row',
        resizeMode: 'cover'
    }
});

export default style;