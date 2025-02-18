import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {useState} from 'react';

export default function Map(props) {
    const [markers, setMarkers] = useState([])

    const addMarker = (event) => {
        const {latitude, longitude} = event.nativeEvent.coordinate;
        setMarkers([...markers, {latitude,longitude}])
    }
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType={props.mapType}
                onPress={addMarker}
            >
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker} />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});