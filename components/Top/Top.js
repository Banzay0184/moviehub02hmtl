class Top {


    handlerOpenTop() {
        const myGamePage = document.querySelector('#myGame')
        myGamePage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.add('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
        const topPage = document.querySelector('#top')
        topPage.classList.remove('hide')

    }

    constructor() {
        this.classNameActive = 'btnactive';
        this.labelAdd = 'Add';
        this.labelRemov = 'Del';
    }

    render() {

        const gameStore = localStorageUtil.getGames()
        let htmlData = ''
        let htmlData2 = ''


        Data.forEach((element) => {
            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = '' + this.classNameActive;
                activeText = this.labelRemov;
            }

            htmlData += `
            <div class="wapp swiper-slide">
                    <img src="${element.img}"
                         alt="">
                    <div class="wapp-text-box">
                        <h1 class="wapp-text">${element.title}</h1>
                    </div>
            </div>
            `
        });


        Data.forEach((element2) => {
            htmlData2 += `
             <div class="cati-movie-top">
                                    <img class="cati-movie-img"
                                         src="${element2.img}"
                                         alt="">
                                    <div class="star">
                                        <div class="star-star">
                                            <img src="img/star-svgrepo-com.svg" alt="">
                                        </div>
                                        <div class="">
                                            <h2 class="star-count">4.0</h2>
                                        </div>
                                    </div>
                                    <h1>Mission: Impossible</h1>
                
             </div>
            `
        });

        const htmltop = `
            
                <h1 class="cati-text">Movies</h1>
                <div id="carusel-top" class="swiper mySwiper">
                    <div class="swiper-wrapper">
                       ${htmlData}
                    </div>
                </div>
                <h1 class="movie-text">Top 10 Movies This Week</h1>
                <div class="top-movie">
                    ${htmlData2}
                </div>
            `;

        ROOT_TOP.innerHTML = htmltop;
    }
}

const
    topPage = new Top();
topPage
    .render();

