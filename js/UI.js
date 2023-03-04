'use strict'

export class Displaydata {
    constructor(arr) {
        this.respons = arr
        this.display()
    }

    display() {
        let box = ''
        for (let i = 0; i < this.respons.length; i++) {
            box += `
    <div class="col col-3 p-2">
        <div data-id="${this.respons[i].id}" class="card  mt-1" role="button">
        <img src="${this.respons[i].thumbnail}" class="card-img-top" alt="">
            <div class="card-body p-0 text-center py-3">
            <h5 class="card-title d-flex align-items-center justify-content-between m-0">${this.respons[i].title} <span class="btn btn-primary py-1 px-2">free</span></h5>
            <p class="card-text mt-5">${this.respons[i].short_description.slice(0, 65)}</p>
            <div class="cart d-flex justify-content-between mt-4">
            <p>${this.respons[i].genre}</p>
            <p>${this.respons[i].platform}</p>
            </div>
        </div>
        </div>
    </div>
    `
        }
        document.querySelector('.row').innerHTML = box
    }
}

export class DisplayDetails {
    constructor(id) {
        this.details = id
        this.displaydetails()
    }
    displaydetails() {
        let box = `
        <div class="col">
            <img class="w-100" src="${this.details.thumbnail}" alt="">
        </div>
        <div class="col-md-8">
            <div class="text text-white">
            <h2>Title: Lost Ark</h2>
            <p>Category: <span>${this.details.genre}</span></p>
            <p>Platform: <span>${this.details.platform}</span></p>
            <p>Status: <span>${this.details.status}</span></p>
            <p>${this.details.description.slice(0, 900)}</p>
            <a href="${this.details.game_url}" class="btn  btn-outline-warning">show game</a>
        </div>
        </div>
        `
        document.getElementById('detail').innerHTML = box
    }

}
