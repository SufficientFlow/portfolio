"use server"

import Pocketbase from 'pocketbase';

class Database
{
    private static pb =  new Pocketbase(process.env.POCKETBASE_URL);

    public static async getProjects(){
        return await this.pb.collection('open_pf_projects').getFullList({
            sort: '-created',
        });
    }
}

export default Database

