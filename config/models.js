import { AsyncStorage } from 'react-native'

// const confToFav = {
//     'Conference': this.state.conference,
//     'Favorite': false
// }
//const checkFav = await AsyncStorage.getItem('favorite')
const keys = await AsyncStorage.getAllKeys();
const values = await AsyncStorage.multiGet(keys);


const getFavorite = async (e) => {
    let favorites = '';
    try {
        favorites = await AsyncStorage.getItem(e) || 'none';
    } catch (error) {
        console.log(error.message);
    }
    return favorites;
}


const saveFavorite = async newFavorite => {
    try {
        let favorite = JSON.parse(values);
        if (!favorite) {
            favorite = []
        }
        favorite.push(newFavorite)
        await AsyncStorage.setItem('newFavorite', JSON.stringify(favorite))
    } catch (error) {
        console.log(error.message);
    }
};

const removeFavorite = async (e) => {
    try {
        await AsyncStorage.removeItem(e);
    } catch (error) {
        console.log(error.message);
    }
}