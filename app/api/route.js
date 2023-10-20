export async function GET(request){
    //Handle GET request for /api/users
    //Retrives user from database or any data source
    const users = [
        {id:1, name:'John'},
        {id:2, name:'Jane'},
        {id:3, name:'Bob'}
    ];


    //Send the users as a reponse
    return new Response(JSON.stringify(users))
}