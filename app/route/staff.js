const staffControllers = require('../controllers/staffControllers');
const staff = (app) => {
    app.get('/api/staff', staffControllers.getStaff);
    app.get('/api/staff/:stid', staffControllers.getStaffById);
}
module.exports = staff;