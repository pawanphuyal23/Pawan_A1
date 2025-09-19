import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: '#191970', 
    paddingTop: 40 
},

  headerBar: { flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     paddingHorizontal: 15, paddingBottom: 15,
      backgroundColor: '#191970' 
    },

//   appleIcon: { width: 25,
//      height: 25, 
//      tintColor: 'green' 
//     },
  headerRight: { flexDirection: 'row', 
    gap: 15 
},
  headerIcon: { width: 20,
     height: 20, 
     tintColor: 'white' 
    },

  scrollViewContent: { paddingHorizontal: 15 

  },

  categoryContainer: { flexDirection: 'row', 
    flexWrap: 'wrap', marginBottom: 20, 
    gap: 10 
},

  categoryButton: { paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderRadius: 20,
     backgroundColor: '#333' 
    },

  activeCategoryButton: { backgroundColor: '#1DB954' 

  },

  categoryText: { color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold' },
  activeCategoryText: { color: '#000'

   },
  playlistGrid: { flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    gap: 10, 
    marginBottom: 20 
},


  playlistButton: { backgroundColor: '#333',
     borderRadius: 8, 
     padding: 10, 
     width: '48%', 
     flexDirection: 'row', 
     alignItems: 'center',
      gap: 10
     },


  musicIcon: { width: 20, 
    height: 20, 
    tintColor: '#fff'
 },

  playlistText: { color: '#fff', 
    fontSize: 14, 
    fontWeight: '500',
     flexShrink: 1 
    },

  sectionTitle: { color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold',
     marginBottom: 15, 
     marginTop: 20 
    },

  recentsScroll: { marginBottom: 20 

  },

  recentItem: { marginRight: 15,
     width: 120
     },

  recentImageBackground: { width: 120,
     height: 120, 
     justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 8, 
      overflow: 'hidden',
       marginBottom: 5 
    },

  recentImage: { resizeMode: 'cover', 
    borderRadius: 8 
},

  recentMusicIcon: { width: 40, 
    height: 40,
     tintColor: '#fff',
      opacity: 0.7
     },

  recentName: { color: '#fff',
    fontSize: 14, 
    fontWeight: '500',
     marginTop: 5 
    },

  recentMeta: { color: '#aaa', 
    fontSize: 12
 },

  audiobooksScroll: { marginBottom: 30

   },

  audiobookItem: { marginRight: 15,
     width: 120 },

  audiobookCover: { width: 120, 
    height: 120,
     borderRadius: 8,
      marginBottom: 8 
    },

  audiobookTitle: { color: '#fff',
     fontSize: 14,
      fontWeight: '600',
       marginBottom: 2 
    },

  audiobookAuthor: { color: '#aaa', 
    fontSize: 12
 },
 
});

