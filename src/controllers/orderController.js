//!Create Order Controller
exports.createOrder = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Read Order Controller
exports.readOrder = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Delete Order Controller
exports.deleteOrder = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Update Order Controller
exports.updateOrder = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};