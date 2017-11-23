/**
 * Created by Radu on 11/23/2017.
 */
// import idb from 'idb';

export default class Task
{
    constructor(name, category, date, repeatType, userID = null)
    {
        this.name = name;
        this.catergory = category;
        this.date = date;
        this.repeatType = repeatType;
        this.userID = userID;

        // this.storeTask();
    };


}