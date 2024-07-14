import { NextApiRequest, NextApiResponse } from "next";



const handler = async (req: NextApiRequest, res: NextApiResponse ) => {
    await connectDB();

    switch (req.method) {
        case 'POST':
            try {
                const { name, email, password } = req.body;

                const existingUser = await User.findOne({ email})
 if (existingUser) {
    return res.status(400).json
 }



            } catch (error) {
                
            }
    }
}