const User = require('../../models/user')

module.exports = async (req, res) => {
    try {
        // Extract data from the request body
        const { username, email, password } = req.body;

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });
       
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create an instance of the User model with the provided data
        const newUser = new User({
            username,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();

        // Send a successful response
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'There was an error creating the user' });
    }
};

