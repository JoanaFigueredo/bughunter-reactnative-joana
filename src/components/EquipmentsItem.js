import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EffectImage} from './EffectImage';

export const EquipmentsItem = ({item: equipmentes}) => {
  return (
    <View style={styles.container}>
      <View style={styles.equipmentValue}>
        <EffectImage atb={equipmentes.affected_attribute} />
        <Text style={styles.value}>+{equipmentes.affected_amount}</Text>
        <Text style={styles.bar}>| </Text>
        <Text style={styles.description} numberOfLines={1}>
          {equipmentes.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2635',
    height: 65,
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  equipmentValue: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 15,
  },
  figure: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bar: {
    color: '#11081A',
    fontSize: 16,
    marginLeft: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    alignItems: 'center',
  },
});
