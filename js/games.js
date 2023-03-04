'use strict'
import { Displaydata } from "./UI.js";
import { Details, Load } from "./details.js";



let respons = []

export class Games {
    constructor() {
        this.getApi()
        this.category()
    }
    async getApi(game) {
        if (game == null) {
            game = 'mmorpg'
        }
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca358c7204msh904fabb3c67c7a8p1d7667jsnfcd5ae2f2257',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`, options)
        respons = await res.json()
        new Displaydata(respons)
        this.id()
        new Load()
    }

    id() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;

                new Details(id)
                this.showdetail()
            });
        })
    }

    showdetail() {
        document.querySelector('section').classList.add('d-none')
        document.querySelector('.gameinfo').classList.remove('d-none')
    }

    category() {
        document.querySelectorAll('a').forEach((item) => {
            item.addEventListener('click', (e) => {
                this.getApi(item.textContent)
                document.querySelector('div').classList.toggle('d-none')
                document.querySelector('.active').classList.remove('active')
                item.classList.add('active')
            })
        })
    }
}
