import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/homeStyles';

const Header = ({ handlePress }) => (
  <View style={styles.headerBar}>
    <Image style={styles.appleIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/831/831276.png' }} />
    <View style={styles.headerRight}>
      <TouchableOpacity onPress={() => handlePress('Header Icon', 'Search')}>
        <Image style={styles.headerIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Header Icon', 'Bell')}>
        <Image style={styles.headerIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Header Icon', 'Settings')}>
        <Image style={styles.headerIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3524/3524636.png' }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;
