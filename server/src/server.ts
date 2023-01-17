import Fastify from "fastify";
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', (req, res) => {

    const habits = prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })
    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('server listening on port: http://localhost:3333');
})