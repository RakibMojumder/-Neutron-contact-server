import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import contactServices from './contact.services';

const createContact = catchAsync(async (req, res) => {
    const result = await contactServices.createContactIntoDB(req.body);

    if (result) {
        return sendResponse(res, {
            success: true,
            statusCode: StatusCodes.OK,
            message: 'Contact created successfully',
            data: result,
        });
    }

    sendResponse(res, {
        success: false,
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Could not create contact',
    });
});

const contactControllers = { createContact };

export default contactControllers;
