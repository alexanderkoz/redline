const users = [{username: 'admin', password:'AeH7bOI2eu65'}]


async function authenticate({username, password})
{
    const user = users.find(u => u.username === username && u.password === password);
    if(user)
    {
        const {password, ...userWithoutPassword} = user;
        return userWithoutPassword;
    }

    console.log(user)
}

module.exports = authenticate;