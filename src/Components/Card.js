import * as Items from './Items'
import werk from './img/werk.png';
import chat from './img/chat.png';
import bmi from './img/bmi.png';

function CardData(title, picture, description, technology, api, database, link){
    this.title = title;
    this.picture = picture;
    this.description = description;
    this.technology = technology;
    this.api = api;
    this.database = database;
    this.link = link;
}

export var theCards = [];
theCards = [
    new CardData("Werk", werk, "This app is going to be office/company productivity app, that will has bunches of functionalities including department chat, department report form, etc.", "Flutter", "Firebase API", "Firebase Cloud Firestore", "https://github.com/thepirateboy/werk"), 
    new CardData("BMI Calculator", bmi, "A simple calculator to calculate the BMI of the user", "Flutter", "None", "None", "https://github.com/thepirateboy/bmi_calculator"),
    new CardData("Group Chat App", chat, "A simple group chatting with register and login system.", "Flutter", "Firebase API", "Firebase Cloud Firestore", "https://github.com/thepirateboy/group_chat_app"),
    // new CardData("Title", "pict", "description", "technology", "api", "database"),
];



export var cardList = []

for (var i of theCards){
    cardList.push(Card(i.title, i.picture, i.description, i.technology, i.api, i.database, i.link))
}

function Card(title, picture, description, technology, api, database, link) {
    if (technology === undefined){
        technology = "None"
    }
    if (api === undefined){
        api = "None"
    }
    if (database === undefined){
        database = "None"
    }

    return (
        <div class="col-md-4 mb-3">
              <div class="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-text">
                    {title}
                  </h3>
                  <p>
                    {description}
                  </p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"></li>
                    <li class="list-group-item">Technology: {technology}</li>
                    <li class="list-group-item">API: {api}</li>
                    <li class="list-group-item">Database: {database}</li>
                    <li class="list-group-item"></li>
                    <a href={link} class="btn btn-primary" >
                        Take me there!</a>
                  </ul>
                </div>
              </div>
            </div>
    )
  }