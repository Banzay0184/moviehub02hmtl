
class GameInfo {

    constructor() {
        this.classNameActive = 'btnactive';

    }

    handleSetLocationStorage(element, id) {
        const {pushGames, games} = localStorageUtil.putGames(id)
        if (pushGames) {
            element.classList.add(this.classNameActive)

        } else {
            element.classList.remove(this.classNameActive)
        }
    }

    render() {
        const gameStore = localStorageUtil.getGames()
        let htmlData = ''
        Data.forEach((element) => {

            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) === -1) {
            } else {
                activeClass = '' + this.classNameActive;
            }

            htmlData += `
            <div class="box hide" id="box">
                <a href="./index.html" class='back' >
                <img alt='' class='backsvg' src='img/arrow-to-top-left-svgrepo-com.svg'/>
                </a>
                <object data="${element.video}" >
                       
                </object>
            <div class='container'>
                <div class="game-descr">
                    <h1 class='game-descr-text'>${element.title}</h1>
                    <div class="infos-box">
                        <h1 class="info-box">
                            16+
                        </h1>
                        <h1 class="info-box">
                            Full HD
                        </h1>
                        <h1 class="info-box">
                            2h 15min
                        </h1>
                    </div>
                    <div class="download-box">
                        <div class="download-box2">
                            <img src="img/star-svgrepo-com.svg" alt="">
                            <h2 class="star-count">4.0</h2>
                            <div class="btns">
                                <Button onclick="Toggle1()" id="btnh1" class="btn">
                                    <img src="img/like-svgrepo-com.svg" alt="">
                                </Button>
                                <Button onclick="Toggle2()" id="btnh2" class="btn">
                                     <img src="img/like-svgrepo-comf.svg" alt="">
                                </Button>
                            </div>
                        </div>
                        <div class="download-box3">
                            <button class = "download" onClick = "gameInfoPage.handleSetLocationStorage(this,${element.id} )" >
                            <img src="img/download-minimalistic-svgrepo-com.svg" alt="">
                            </button>
                            <img src="img/bell-svgrepo-com.svg" alt="">
                        </div>
                    </div>
                    <div class="game-descr-box">
                        <h1>DESCRIPTION:</h1>
                        <p>${element.descr}</p>
                    </div>
                    <div class="game-descr-info">
                        <h1>INFO</h1>
                        <p><span>Release Date: </span>${element.date}</p>
                        <p><span>Genres: </span>${element.genres.join('')}</p>
                    </div>
                </div>
            </div>
            </div>
            `
        });
        const html = `
                ${htmlData}
        `;
        ROOT_gameINFO.innerHTML = html

        const cardGameParent = document.querySelector('.top-movie'),
            cardGame = document.querySelectorAll('.cati-movie-img'),
            cardGameContent = document.querySelectorAll('.box'),
            menu = document.querySelector('.menu'),
            gameInfoPage = document.querySelector('#gameInfo'),
            topGame = document.querySelector('#top')

        function hideGameContent() {
            cardGameContent.forEach(item => {
                item.classList.add('hide',)
                item.classList.remove('show',)


            })
        }

        function showGameContent(i = 0) {
            cardGameContent[i].classList.add('show')
            cardGameContent[i].classList.remove('hide')
            cardGame[i].classList.add('tabheader__item_active')
        }

        cardGameParent.addEventListener('click', (e) => {
            const target = e.target
            cardGame.forEach((item, idx) => {
                if (target === item) {
                    hideGameContent()
                    showGameContent(idx)
                    topGame.classList.add('hide')
                    gameInfoPage.classList.remove('hide')
                    menu.classList.add('hide')

                }
            })
        })
    }
}

const gameInfoPage = new GameInfo()
gameInfoPage.render()


// First Like Button
const btnvar1 = document.getElementById('btnh1');

function Toggle1() {
    if (btnvar2.classList === 'red') {
    } else {
        btnvar1.classList.add('blu')
        btnvar2.classList.remove('red')

    }
    // if (btnvar1.classList == "red") {
    //     btnvar1.style.color = "grey"
    // } else {
    //     btnvar1.style.color = "red"
    // }
}


//    Second Like Button
var btnvar2 = document.getElementById('btnh2');

function Toggle2() {
    if (btnvar1.classList === "blu") {
    } else {
        btnvar1.classList.remove('blu')
        btnvar2.classList.add('red')

    }
}