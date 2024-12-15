import { Ui } from "./ui.js";

export class Details {
    // declaration
    constructor() {
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
    }

    // get details api
    async getDetails(gameId) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
                'x-rapidapi-key': '8ddf878c01msh8a19d5de5ac0397p136459jsnac231d4f6175',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            },
        };
        try {
            const req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
            const res = await req.json();
            this.ui.displayDetails(res);
            console.log(res);
        } catch (error) {
            console.error("error ", error);
        } finally {
            loading.classList.add('d-none');
        }
    }
}
