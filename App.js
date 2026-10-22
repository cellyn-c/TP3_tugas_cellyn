
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.layar}>
      <View style={styles.kartu}>
        <View style={styles.avatar}>
          <Text style={styles.inisial}>AK</Text>
        </View>

        <Text style={styles.nama}>CELLYN</Text>
        <Text style={styles.identitas}>NIM:253303620011</Text>
        <Text style={styles.identitas}>Program Studi SISTEM INFORMASI</Text>

        <View style={styles.skills}>
          <Text style={[styles.tag, styles.biru]}>JavaScript</Text>
          <Text style={[styles.tag, styles.ungu]}>React Native</Text>
          <Text style={[styles.tag, styles.hijau]}>Desain</Text>
        </View>

        <Text style={styles.motto}>
          "Terus belajar, terus berkembang."
        </Text>

        <Pressable style={styles.tombol} onPress={() => {}}>
          <Text style={styles.teksTombol}>Hubungi Saya</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: '#EAF0F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  kartu: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  inisial: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nama: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
    marginBottom: 8,
  },
  identitas: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 5,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  tag: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  biru: {
    backgroundColor: '#2563EB',
  },
  ungu: {
    backgroundColor: '#7C3AED',
  },
  hijau: {
    backgroundColor: '#15803D',
  },
  motto: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#475569',
    textAlign: 'center',
    marginBottom: 22,
  },
  tombol: {
    backgroundColor: '#2563EB',
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
  },
  teksTombol: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});