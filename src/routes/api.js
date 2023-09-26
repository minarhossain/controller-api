const { createAdmin, readAdmin, deleteAdmin, updateAdmin } = require('../controllers/adminController');
const { createCategory, readCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const { createCustomer, readCustomer, deleteCustomer, updateCustomer } = require('../controllers/customerController');
const { createOrder, updateOrder, readOrder, deleteOrder } = require('../controllers/orderController');
const { createOrderItem, readOrderItem, deleteOrderItem, updateOrderItem } = require('../controllers/orderItemController');
const { createPayment, readPayment, deletePayment, updatePayment } = require('../controllers/paymentController');
const { createPost, readPost, deletePost, updatePost } = require('../controllers/postController');
const { createProduct, readProduct, deleteProduct, updateProduct } = require('../controllers/productController');

const { createShipment, readShipment, deleteShipment, updateShipment } = require('../controllers/shipmentController');
const { createSubAdmin, readSubAdmin, deleteSubAdmin, updateSubAdmin } = require('../controllers/subAdminController');
const { createUser, readUser, deleteUser } = require('../controllers/userController');
const { createWishlist, readWishlist, deleteWishlist, updateWishlist } = require('../controllers/wishlistController');

const router = require('express').Router();

//!User Routes
router.get('create-user', createUser);

router.get('read-user', readUser);

router.get('delete-user', deleteUser);

router.get('update-user', deleteUser);


//!Admin Routes
router.get('create-admin', createAdmin);

router.get('read-admin', readAdmin);

router.get('delete-admin', deleteAdmin);

router.get('update-admin', updateAdmin);


//!subAdmin Routes
router.get('create-sub-admin', createSubAdmin);

router.get('read-sub-admin', readSubAdmin);

router.get('delete-sub-admin', deleteSubAdmin);

router.get('update-sub-admin', updateSubAdmin);


//!Post Routes
router.get('create-post', createPost);

router.get('read-post', readPost);

router.get('delete-post', deletePost);

router.get('update-post', updatePost);


//!Customer Routes
router.get('create-customer', createCustomer);

router.get('read-customer', readCustomer);

router.get('delete-customer', deleteCustomer);

router.get('update-customer', updateCustomer);


//!Category Routes
router.get('create-category', createCategory);

router.get('read-category', readCategory);

router.get('delete-category', deleteCategory);

router.get('update-category', updateCategory);



//!Order Routes
router.get('create-order', createOrder);

router.get('read-order', readOrder);

router.get('delete-order', deleteOrder);

router.get('update-order', updateOrder);



//!Product Routes
router.get('create-product', createProduct);

router.get('read-product', readProduct);

router.get('delete-product', deleteProduct);

router.get('update-product', updateProduct);



//!Order Item Routes
router.get('create-order-item', createOrderItem);

router.get('read-order-item', readOrderItem);

router.get('delete-order-item', deleteOrderItem);

router.get('update-order-item', updateOrderItem);



//!Payment Routes
router.get('create-payment', createPayment);

router.get('read-payment', readPayment);

router.get('delete-payment', deletePayment);

router.get('update-payment', updatePayment);



//!Shipment Routes
router.get('create-shipment', createShipment);

router.get('read-shipment', readShipment);

router.get('delete-shipment', deleteShipment);

router.get('update-shipment', updateShipment);



//!Cart Routes
router.get('create-cart', createShipment);

router.get('read-cart', readShipment);

router.get('delete-cart', deleteShipment);

router.get('update-cart', updateShipment);




//!Wishlist Routes
router.get('create-wishlist', createWishlist);

router.get('read-wishlist', readWishlist);

router.get('delete-wishlist', deleteWishlist);

router.get('update-wishlist', updateWishlist);




module.exports = router;