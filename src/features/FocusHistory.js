import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/size'

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}>{item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Things we've focused on:</Text>
      <FlatList
        data = {history}
        renderItem={renderItem}  
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold'
  }, 
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  }
})