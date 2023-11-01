const user = {
    id: 1,
    name: 'Zoro',
    email: 'santoryu@email.com',
    password: 'gpsZoro',
}

const noPasswordUser = {
    id: 1,
    name: 'Zoro',
    email: 'santoryu@email.com',
}

const wrongPasswordUser = {
    id: 1,
    name: 'Zoro',
    email: 'santoryu@email.com',
    password: 'wrongPassword',
}

const users = [
    noPasswordUser,
    {
        id: 2,
        name: 'Luffy',
        email: 'gomugomu@email',
        password: 'gumGum',
    },
]


const userWithInvalidEmail = {
    email: 'santoryuemail.com',
    password: 'gpsZoro',
}

const userWithInvalidPassword = {
    email: 'santoryuemail.com',
    password: 'gpsZoro',
}

const userRegistered = { ...user, password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW' };
const validLoginBody = {
    email: 'admin@admin.com', password: 'seret_admin'
}

export {
    user,
    noPasswordUser,
    wrongPasswordUser,
    users,
    userWithInvalidEmail,
    userWithInvalidPassword,
    userRegistered,
    validLoginBody,
}