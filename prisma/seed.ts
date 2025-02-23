import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    const post1 = await prisma.members.upsert( {
        where: { name: 'Kirby Adrian P. Saligan' },
        update: {},
        create: {
            name: 'Kirby Adrian P. Saligan',
            role: 'Frontend'
        }
    } );

    const post2 = await prisma.members.upsert( {
        where: { name: 'Kein Daryle F. Eclarinal' },
        update: {},
        create: {
            name: 'Kein Daryle F. Eclarinal',
            role: 'Backend'
        }
    } );

    const post3 = await prisma.projects.upsert( {
        where: { name: 'Soil Degradation Website' },
        update: {},
        create: {
            name: 'Soil Degradation Website',
            description: 'Spreading awareness to the problems of soil degradation.'
        }
    } );

    const post4 = await prisma.projects.upsert( {
        where: { name: 'Game of Life' },
        update: {},
        create: {
            name: 'Game of Life',
            description: 'A simple Game of Life simulator.'
        }
    } );

    const post5 = await prisma.member_projects.upsert( {
        where: { member_id_project_id: { member_id: 1, project_id: 1 } },
        update: {},
        create: {
            member_id: 1,
            project_id: 1
        }
    } );

    const post6 = await prisma.member_projects.upsert( {
        where: { member_id_project_id: { member_id: 2, project_id: 2 } },
        update: {},
        create: {
            member_id: 2,
            project_id: 2
        }
    } );
    
    console.log( { post1, post2, post3, post4, post5, post6 } );

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
