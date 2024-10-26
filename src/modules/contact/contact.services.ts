import { TContact } from './contact.interface';
import Contact from './contact.model';

const createContactIntoDB = async (payload: TContact) => {
    const result = await Contact.create(payload);
    return result;
};

const contactServices = { createContactIntoDB };

export default contactServices;
