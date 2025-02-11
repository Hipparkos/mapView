import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Settings(props) {
    return (
        <View style={styles.settingsArea}>
            <Text style={[styles.heading, { color: props.backgroundColor }]}>Map Type</Text>
            <Picker
                selectedValue={props.mapType}
                onValueChange={(itemValue) => {
                    if (props.setMapType) {
                        props.setMapType(itemValue);
                    }
                }}
            >
                <Picker.Item label="Standard" value="standard" />
                <Picker.Item label="Terrain" value="terrain" />
                <Picker.Item label="Satellite" value="satellite" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsArea: {
        marginTop: 32,
        marginLeft: 16,
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
