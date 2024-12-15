import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
    // declaration
    constructor() {
        this.getGames("all");
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });
        this.ui = new Ui();
    }

    // get all games api
    async getGames(category) {
        const loading = document.getElementById('loading');
        loading.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8ddf878c01msh8a19d5de5ac0397p136459jsnac231d4f6175',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };

        try {
            var req;
            if (category == "all") {
                req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options);
            } else {
                req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            }
            const res = await req.json();
            this.ui.displayGamesData(res);
            this.addClick();
            console.log(res);
        } catch (error) {
            console.error("error ", error);
        } finally {
            loading.classList.add('d-none');
        }
    }

    // add click event to game card
    addClick() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.dataset.id;
                this.openDetails(id);
            })
        })
    }

    // click event funtion
    openDetails(gameID) {
        const details = new Details();
        document.querySelector(".games").classList.add('d-none');
        document.querySelector(".details").classList.remove('d-none');
        details.getDetails(gameID);
    }
}
