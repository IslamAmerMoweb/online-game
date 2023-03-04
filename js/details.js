'use strict'

import { DisplayDetails } from './UI.js'

let arr = []

export class Details {

    constructor(id) {
        this.id = id
        this.getdetails()
    }

    async getdetails() {
        document.querySelector('div').classList.toggle('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca358c7204msh904fabb3c67c7a8p1d7667jsnfcd5ae2f2257',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options)
        arr = await res.json()
        new DisplayDetails(arr)
        new Load()
    }
}

export class Load {
    constructor() {
        this.dom()
        this.closesec()
        this.body = document.querySelector('body')
    }


    dom() {
        setTimeout(_ => {
            document.querySelector('div').classList.toggle('d-none')
            this.body.style.overflow = 'unset'
        }, 1000)
    }



    closesec() {
        document.getElementById('btnClose').addEventListener('click', function () {
            document.querySelector('.gameinfo').classList.add('d-none')
            document.querySelector('section').classList.remove('d-none')
        })
    }
}