import clubs from './clubs.js';


// ES5
//  DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

//ES6
class DataSource {
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }

    //Promise
    static searchClub(keyword) {
        // const filteredClubs = clubs.filter(function (club) {
        //     return club.name.toUpperCase().includes(keyword.toUpperCase());
        // });
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                //ES5
                // this.onFailed(keyword + " is not found");
                //ES6
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;