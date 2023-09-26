//!Create Shipment Controller
exports.createShipment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Read Shipment Controller
exports.readShipment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Delete Shipment Controller
exports.deleteShipment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};

//!Update Shipment Controller
exports.updateShipment = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Your Data will be appear here' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'Fail', error: 'Something went wrong' })
    }
};