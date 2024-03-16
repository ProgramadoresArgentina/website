import prisma from '@/lib/prisma';
import { getSession, handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  onError(req: Request, error: Error) {
    console.error(error);
  },
	callback: async (req, res) => {
		try {
			const callback = await handleCallback(req, res, {
				redirectUri: process.env.AUTH0_BASE_URL
			});
			createUser(req,res);
      return callback;
		} catch (error) {
			console.error(error);
		}
	}
});

async function createUser(req, res) {
  const { user }: any = await getSession(req, res);
	const userExists = await prisma.user.findUnique({
		where: { email: user.email },
	});
	if (!userExists) {
        try {
            const userRow = await prisma.user.create({
                data: {
                    email: user.email,
                    username: user.name,
                },
            });
    
            await prisma.userSettings.create({
                data: {
                    avatar: user.picture || user.avatar,
                    description: "Soy nuevo en la comunidad!",
                    firstName: null,
                    lastName: null,
                    position: [],
                    user: {
                        connect: {
                            id: userRow.id,
                        },
                    },
                },
            });

            
        } catch (error) {
            console.log(error);
        }
	}
}