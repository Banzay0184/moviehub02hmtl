
class MyGame {
    handlerOpenMyGame() {
        myGamePage.render()
        const topPage = document.querySelector('#top')
        topPage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.add('hide')
        const myGamePages = document.querySelector('#myGame')
        myGamePages.classList.remove('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
    }


    handleSetLocationStorages(element, id) {
        const {pushGames, games} = localStorageUtil.putGames(id)
        if (pushGames) {

        } else {
            const cardGame = document.querySelectorAll('#Del')
            cardGame.forEach(del => {
                del.addEventListener('click', (e) => {
                    del.classList.add('hide')
                })
            })
        }
    }

    render() {
        const gameStore = localStorageUtil.getGames()
        let htmlData = ''

        Data.forEach((element) => {
            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) !== -1) {
                htmlData += `
                <div id="Del" class="card-game">
                        <div class="movie-list">
                            <div class="movie-list-box">
                                <img class='movie-list-img' src=${element.img} alt=""/>
                                <div class="movie-texts">
                                    <h1 class='movie-list-text'>${element.title}</h1>
                                    <p class='movie-list-title'>${element.genres}</p>
                                    <p class='movie-list-title'>${element.date}</p>
                                </div>
                            </div>
                            <div class='star-list'>
                                <img src='img/star-svgrepo-com.svg' alt=""/>
                                <img src='img/star-svgrepo-com.svg' alt=""/>
                                <img src='img/star-svgrepo-com.svg' alt=""/>
                                <img src='img/star-svgrepo-com.svg' alt=""/>
                                <img src='img/star-svgrepo-com.svg' alt=""/>
                            </div>
                        </div>
                        <button class = 'btnDel' onClick = "myGamePage.handleSetLocationStorages(this,${element.id})" > Delete </button>
                </div>   
                `
            }
        });

        const html = `
            <div class="container">
                <h1 class="movie-text">MyGame</h1>
                ${htmlData}
            </div>
        `;
        ROOT_myGAME.innerHTML = html
    }
}

const myGamePage = new MyGame()



