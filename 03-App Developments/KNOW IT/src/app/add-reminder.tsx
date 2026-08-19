import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AddReminderScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.title}>Add Reminder</Text>

        <View style={styles.headerSpace} />

      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.placeholder}>
          Reminder form will go here.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  back: {
    fontSize: 40,
    fontWeight: '300',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerSpace: {
    width: 30,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    fontSize: 16,
    color: '#666',
  },
});