import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/homeStyles';
import Header from '../components/Header';
import { categories, playlists, recents, audiobooks } from '../data/musicData';

const Home = () => {
  const handlePress = (type, name) => {
    console.log(`${type} clicked: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Header handlePress={handlePress} />

      <ScrollView style={styles.scrollViewContent}>
        {/* Categories */}
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, index === 0 && styles.activeCategoryButton]}
              onPress={() => handlePress('Category', category)}
            >
              <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Playlists */}
        <View style={styles.playlistGrid}>
          {playlists.map((playlist, index) => (
            <TouchableOpacity
              key={index}
              style={styles.playlistButton}
              onPress={() => handlePress('Playlist', playlist.name)}
            >
              <Image
                style={styles.musicIcon}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/727/727245.png' }}
              />
              <Text style={styles.playlistText}>{playlist.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recents */}
        <Text style={styles.sectionTitle}>Recents</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentsScroll}>
          {recents.map((recent, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recentItem}
              onPress={() => handlePress('Recent', recent.name)}
            >
              <ImageBackground
  source={{ uri: `https://cdn-icons-png.flaticon.com/512/727/727245.png` }} 
  style={styles.recentImageBackground}
  imageStyle={styles.recentImage}
>

                <Image
                  style={styles.recentMusicIcon}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/727/727239.png' }}
                />
              </ImageBackground>
              <Text style={styles.recentName}>{recent.name}</Text>
              <Text style={styles.recentMeta}>{recent.type}</Text>
              <Text style={styles.recentMeta}>{recent.user}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Audiobooks */}
        <Text style={styles.sectionTitle}>Audiobooks for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.audiobooksScroll}>
          {audiobooks.map((book, index) => (
            <TouchableOpacity
              key={index}
              style={styles.audiobookItem}
              onPress={() => handlePress('Audiobook', book.title)}
            >
              <Image source={{ uri: book.cover }} style={styles.audiobookCover} />
              <Text style={styles.audiobookTitle}>{book.title}</Text>
              <Text style={styles.audiobookAuthor}>{book.author}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
