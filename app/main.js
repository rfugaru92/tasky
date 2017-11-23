import Task from './task.js';
import idb from 'idb';


function openDatabase() {
    // If the browser doesn't support service worker,
    // we don't care about having a database
    if (!navigator.serviceWorker) {
        return Promise.resolve();
    }

    // console.log('merge baza')

    return idb.open('tasky', 1, function(upgradeDb) {
        var store = upgradeDb.createObjectStore('tasks', {
            keyPath: 'name'
        });
        store.createIndex('by-date', 'date');
    });
}

function storeTask(dbPromise, task)
{
    dbPromise.then(function (db) {
        if(!db) return;

        const tx = db.transaction('tasks', 'readwrite');
        const store = tx.objectStore('tasks');

        store.put(task);
    });
}


class IndexController
{
    constructor()
    {
        this._container = document.querySelector('.container');
        this._todoList = document.querySelector('#todo-list');
        this._tasks = [];
    }

    addTask(task)
    {
        let el = document.createElement('li');
        el.className = 'list-group-item';
        let sp = document.createElement('span');
        sp.className = 'pull-right bigger blue2 glyphicon glyphicon-question-sign';
        let tNode = document.createTextNode(task.name);
        el.appendChild(tNode);
        el.appendChild(sp);

        this._todoList.appendChild(el);
    }
}


const indexController = new IndexController();
const task = new Task('Test the task', 'Common', '07/07/2007','daily', 12);




