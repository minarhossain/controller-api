//!Create Admin Controller 1
exports.createAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })
    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Read Admin Controller 2
exports.readAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Delete Admin Controller 3
exports.deleteAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};


//!Update Admin Controller
exports.updateAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};