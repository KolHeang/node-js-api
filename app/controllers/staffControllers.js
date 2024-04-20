const con = require('../model/config');
const response = require('../controllers/response');

const getStaff = (req, res) => {
    
    // const offset = (page - 1) * show;
    const sql = `SELECT * FROM tbstaff`;
    // con.query(sql,[show,offset], (err, result) => {
    //     if (err) {
    //         res.status(500).send(err.message);
    //     } else {
    //         res.status(200).json(response.successTotaol(result));
    //     }
    // });
    return response.pagination(sql, null, null, req, res);

}

const getStaffById = async(req, res) => {
    try
    {
        const sql = `SELECT * FROM tbstaff WHERE stid = $1`;
        const result = await con.query(sql, [req.params.stid]);
        return response.success(result);
    } catch (err) {
        return response.error(err.message);
    }
};
//     const sql = `SELECT * FROM tbstaff WHERE stid = $1`;
//     con.query(sql, [req.params.stid], (err, result) => {
//         if (err) {
//             res.status(500).send(err.message);
//         } else {
//             res.status(200).json(response.error(result));
//         }
//     });
// }

module.exports = {
    getStaff,
    getStaffById
}