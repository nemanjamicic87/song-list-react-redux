import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Paradise city', duration: '4:05' },
    { title: 'I want that way', duration: '3:05' },
    { title: 'Makarena', duration: '2:35' },
    { title: 'Street are calling', duration: '4:03' },
    { title: 'Beogradski Partizan', duration: '10:05' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
