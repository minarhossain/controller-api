//!Create SubAdmin Controller
exports.createSubAdmin = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Read SubAdmin Controller
exports.readSubAdmin = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Delete SubAdmin Controller
exports.deleteSubAdmin = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Update SubAdmin Controller
exports.updateSubAdmin = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};