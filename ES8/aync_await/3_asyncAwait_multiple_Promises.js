async function getUsers(users){
    const promises = users.map((user)=>{
        return fetch(`https://api.github.com/users/${user}`);
    });
    
    // depois que ambos terminarem jogar para a const promises
    const usersResponse = await Promise.all(promises);
    const jsonPromises = usersResponse.map(json => json.json());
    const jsons = await Promise.all(jsonPromises);
    console.log(jsons.map(user => user.name));
}

getUsers(['apostata','thiagohata']);