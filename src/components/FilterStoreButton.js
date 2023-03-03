import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export const FilterStoreButton = ({label, color, isSelected, ...props}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnFilter,
        {
          borderColor: color,
          backgroundColor: isSelected ? color : 'transparent',
        },
      ]}
      {...props}>
      <Text style={styles.textFilter}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnFilter: {
    width: 80,
    height: 25,
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFilter: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});
