
class Search {

    handlerOpenSearch() {
        const myGamePage = document.querySelector('#myGame')
        myGamePage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.remove('hide')
        const topPage = document.querySelector('#top')
        topPage.classList.add('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
    }


    render() {
        let htmlData = ''

        Data.forEach((element) => {
            htmlData += `
            <div class="cati-movie ${element.genres.join('')}">
                <img class="cati-movie-img"
                     src="${element.img}"
                     alt="">
                <div class="star">
                    <div class="star-star">
                        <img src="img/star-svgrepo-com.svg" alt="">
                        
                    </div>
                    <div class="">
                        <h2 class="star-count">${element.star}.0</h2>
                    </div>
                </div>
                <h1>${element.title}</h1>
            </div>
            `
        });


        const html = `
            <div class="container">
                <div class="cati">
                    <h1 class="cati-text">Catigories</h1>
                    <input class="cati-search" type="search" placeholder="Search">
                    <div class="cati-cati">
                        <button data-f="All" class="cati-btn" href="#">All</button>
                        <button data-f="Action" class="cati-btn" href="#">Action</button>
                        <button data-f="Comedy" class="cati-btn" href="#">Comedy</button>
                        <button data-f="Drama" class="cati-btn" href="#">Drama</button>
                        <button data-f="Family" class="cati-btn" href="#">Family</button>
                        <button data-f="Biography" class="cati-btn" href="#">Biography</button>
                        <button data-f="History" class="cati-btn" href="#">History</button>
                    </div>
                    <div class="cati-movies">
                        ${htmlData}
                    </div>
                </div>
            </div>
        `;
        ROOT_SEARCH.innerHTML = html
    }
}

const searchPage = new Search()
searchPage.render()

const filterBtn = document.querySelectorAll('.cati-movie')

document.querySelector('.cati-cati').addEventListener('click', e => {
    if (e.target.classList !== 'cati-cati') {

    }
    let filterClass = e.target.dataset['f']
    filterBtn.forEach(el => {
        if (!el.classList.contains(filterClass) && filterClass !== 'All') {
            el.classList.add('hide-ani')
        } else {
            el.classList.remove('hide-ani')
        }
    })

});