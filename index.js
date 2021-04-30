const { prisma } = require('./generated/prisma-client');



async function main() {

  await prisma.createUser({
    name: 'Jesse',
    email: 'jesse@jesse.com',
    password: '123123'
  })
  
  const users = await prisma.users()
  
  console.log('Users: ', users)

}

main().catch(e => console.error(e))

