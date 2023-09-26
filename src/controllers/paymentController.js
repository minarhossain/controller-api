//!Create Payment Controller
exports.createPayment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Read Payment Controller
exports.readPayment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Delete Payment Controller
exports.deletePayment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Update Payment Controller
exports.updatePayment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};