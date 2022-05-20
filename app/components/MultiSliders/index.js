import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
import CustomLabel from './CustomLabel';
import { getSize } from '../../common';

export default function MultiSliders({
    title = 'Tiêu đề',
    minPoint = 0,
    maxPoint = 20
}) {
    const [multiSliderValue, setMultiSliderValue] = React.useState([
        minPoint,
        maxPoint
    ]);

    const multiSliderValuesChange = (values) => setMultiSliderValue(values);

    return (
        <View style={styles.container}>
            <View>
                {/* <Text style={{ alignSelf: 'flex-start', marginBottom: 8 }}>{title}</Text> */}
                <MultiSlider
                    values={[multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={getSize.Width / 2}
                    onValuesChange={multiSliderValuesChange}
                    min={0}
                    max={20}
                    step={1}
                    allowOverlap
                    snapped
                    customLabel={CustomLabel}
                    selectedStyle={{
                        backgroundColor: 'green',
                        height: 6,
                        top: -3
                    }}
                    markerStyle={{ backgroundColor: '#f5a540' }}
                    containerStyle={{ height: 20, marginTop: 32 }}
                    customMarker={CustomMarker}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        top: 0
                    }}>
                    <Text style={styles.text}>{multiSliderValue[0]}</Text>
                    <Text style={styles.text}>{multiSliderValue[1]}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { alignSelf: 'center' },
    title: { fontSize: 30 },
    sliderOne: { flexDirection: 'row', justifyContent: 'space-around' }
});
