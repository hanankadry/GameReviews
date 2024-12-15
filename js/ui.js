export class Ui {
  // display all games
  displayGamesData(data) {
    let gamesList = ``;
    for (let i = 0; i < data.length; i++) {
      gamesList += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100 bg-transparent" role="button" data-id="${data[i].id}">
                <div class="card-body">
                  <div class="position-relative">
                    <img
                      class="card-img-top object-fit-cover h-100 mb-3"
                      src="${data[i].thumbnail}"
                    />
                  </div>

                  <div>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <h3 class="h6">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">${this.getStatus(data[i].release_date)}</span>
                    </div>

                    <p class="card-text text-center opacity-50">
                    ${data[i].short_description}
                    </p>
                  </div>
                </div>

                <footer
                  class="card-footer small d-flex align-items-center justify-content-between"
                >
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </footer>
              </div>
            </div>`;
    }
    document.getElementById("gamesList").innerHTML = gamesList;
  }

  // display game details
  displayDetails(data) {
    const gameDetails = `
         <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="game thumbnail" />
         </div>
         <div class="col-md-8">
            <h2>Title: ${data.title}
            </h2>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span></p>
            <p>${data.short_description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
         </div>`;
    document.getElementById('detailsContent').innerHTML = gameDetails;
  }

  // check release date
  isDateBeforeToday(date) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString());
  }

  // get game release status
  getStatus(date) {
    let curDate;
    let status;
    curDate = new Date(date.replace("-", ","));
    if (this.isDateBeforeToday(curDate)) {
      status = 'Live';
    } else {
      status = 'Coming Soon';
    };
    return status;
  }
}
