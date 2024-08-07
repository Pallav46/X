const express = require("express");
const {
  createServiceProvider,
  deleteServiceProviderById,
  loginServiceProvider,
  logoutServiceProvider,
  forgotPasswordServiceProvider,
  resetPasswordServiceProvider,
  updateServiceProviderPassword,
  getServiceProviderDetail,
  updateServiceProviderProfile,
  updateServiceProviderService,
  getServiceProviderService,
  getServiceProviderById,
  sendReview
} = require("../controllers/serviceProviderController");

const { isAuthenticatedServiceProvider, isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");
const { getAllCustomersChatOfServiceProvider } = require("../controllers/messageController");
const { getAllNotification } = require("../controllers/notificationController");
const { askForConfirmation } = require("../controllers/confirmationController");
const { getProviderAllWork, getProviderWork, sendBill, getProviderHistory } = require("../controllers/serviceRequestController");

const router = express.Router();

// router.route("/").get(getAllServiceProvider);
router.route("/register").post(createServiceProvider);
router.route("/login").post(loginServiceProvider);
router.route('/logout').post(isAuthenticatedServiceProvider, logoutServiceProvider);
router.route('/password/forgot').post(isAuthenticatedServiceProvider, forgotPasswordServiceProvider)
router.route('/auth/resetpassword/:token').put(isAuthenticatedServiceProvider, resetPasswordServiceProvider)
router.route('/password/update').put(isAuthenticatedServiceProvider, updateServiceProviderPassword)
router.route('/me').get(isAuthenticatedServiceProvider, getServiceProviderDetail)
router.route('/me/update').put(isAuthenticatedServiceProvider, updateServiceProviderProfile)
router.route('/me/updateService').put(isAuthenticatedServiceProvider, updateServiceProviderService)
router.route('/me/services').get(isAuthenticatedServiceProvider, getServiceProviderService)
router.route('/chats').get(isAuthenticatedServiceProvider, getAllCustomersChatOfServiceProvider)
router.route('/notification').get(isAuthenticatedServiceProvider, getAllNotification)
router.route('/confirmation').post(isAuthenticatedServiceProvider, askForConfirmation)
router.route('/myWork').get(isAuthenticatedServiceProvider, getProviderAllWork)
router.route('/history').get(isAuthenticatedServiceProvider, getProviderHistory)
router.route('/sendBill').post(isAuthenticatedServiceProvider, sendBill)
router.route('/work/:workId').get(isAuthenticatedServiceProvider, getProviderWork)
router.route("/:id").get(getServiceProviderById);
router.route("/review").post(isAuthenticatedUser ,sendReview);

// router.route("/:id").put(updateServiceProviderById);
// router.route("/:id").delete(deleteServiceProviderById); // -- Admin

module.exports = router;
