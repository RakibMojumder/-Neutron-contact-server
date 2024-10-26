import mongoose, { model } from 'mongoose';
import { TContact } from './contact.interface';

const contactSchema = new mongoose.Schema<TContact>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
});

const Contact = model<TContact>('contacts', contactSchema);

export default Contact;
