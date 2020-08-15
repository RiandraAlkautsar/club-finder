import "../component/search-bar.js";
import "../component/club-list.js";
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");

    //sudah di custom:
    // const buttonSearchElement = document.querySelector("#searchButtonElement");

    const clubListElement = document.querySelector("club-list");

    // const onButtonSearchClicked = () => {
    // const dataSource = new DataSource(renderResult, fallbackResult);
    // dataSource.searchClub(searchElement.value);

    //Promise
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }
    //     DataSource.searchClub(searchElement.value).then(renderResult).catch(fallbackResult);
    // };

    const renderResult = results => {
        clubListElement.clubs = results;
        //Sudah di custom Element:
        // clubListElement.innerHTML = "";
        // results.forEach(club => {
        //     const {
        //         name,
        //         fanArt,
        //         description,
        //         stadium
        //     } = club;
        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");

        //ES5
        //     clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
        //         '<div class="club-info">\n' +
        //         '<h2>' + name + '</h2>\n' +
        //         '<p>' + description + '</p>' +
        //         '</div>';
        //     clubListElement.appendChild(clubElement);
        // })

        //ES6
        //     clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //         <div class="club-info">
        //         <h2> ${name}</h2>
        //         <p>${description}</p>
        //         <span>${stadium}</span>
        //         </div>`;
        //     clubListElement.appendChild(clubElement);
        // })
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
        //Sudah di custom
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder">${message} + </h2>`;
    };
    //sudah di definisikan di search-bar.js
    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;