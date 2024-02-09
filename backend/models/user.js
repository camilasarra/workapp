const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Garantiza que cada correo electrónico sea único
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String // para almacenar la imagen del usuario
    }
});

// Antes de guardar el usuario, hashear la contraseña
userSchema.pre('save', async function(next) {
    try {
        // Solo hashear la contraseña si es nueva o ha sido modificada
        if (!this.isModified('password')) {
            return next();
        }

        // Generar un salt (una cadena aleatoria) y hashear la contraseña con el salt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Reemplazar la contraseña original con la contraseña hasheada
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;