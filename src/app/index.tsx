import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  // Get today's actual date
  const today = new Date();

  // Get the current day
  const day = today.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  // Get the current date
  const date = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>KNOW IT</Text>

        <Pressable>
          <Text style={styles.settings}>⚙</Text>
        </Pressable>
      </View>

      {/* Date */}
      <View style={styles.dateSection}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {/* Today's reminders */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What's for today?</Text>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No reminders yet.</Text>
          <Text style={styles.emptySubText}>
            Add something to remember today.
          </Text>
        </View>
      </View>

      {/* Add button */}
      <Link href="/add-reminder" asChild>
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  settings: {
    fontSize: 26,
  },

  dateSection: {
    marginTop: 35,
  },

  day: {
    fontSize: 24,
    fontWeight: '600',
  },

  date: {
    fontSize: 17,
    color: '#666',
    marginTop: 5,
  },

  card: {
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  emptyContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#666',
  },

  emptySubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 6,
  },

  addButton: {
    position: 'absolute',
    right: 25,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '300',
  },
});