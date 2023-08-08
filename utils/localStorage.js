class LocalStorageUtil {
    constructor() {
        this.keyName = 'key'
    }

    getGames() {
        const gamesLocalStorage = localStorage.getItem(this.keyName);
        if (gamesLocalStorage !== null) {
            return JSON.parse(gamesLocalStorage);
        }
        return [];
    }

    putGames(id) {
        let games = this.getGames();
        let pushGames = false;
        const index = games.indexOf(id);
        if (index === -1) {
            games.push(id);
            pushGames = true
        } else {
            games.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(games));

        return {pushGames, games}
    }
}

const localStorageUtil = new LocalStorageUtil();
