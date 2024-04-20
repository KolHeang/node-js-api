const con = require('../model/config');
const successTotaol = (result) => {
    return result=({
        status: 200,
        total: result.rowCount,
        result: result.rows,
    });
};
const success = (result) => {
    return result=({
        status: 200,
        result: result.rows,
    });
};
const error = (result) => {
    return result=({
        status: 400,
        error: 'id not found',
    });
};
const pag = async(query,condition,group,req,res) => {
    const page = parseInt(req.query.page) || null;
    const show = parseInt(req.query.show) || null;
    const offset=show*(page-1);
    const limit=show;
    
    //  check this query have page and show or not
    if (!page || !show)
    {
        const data=await conn.query(`${query} ${condition} ${group} ${short}`);
        res.status(200).json({
                                "status":200
                                ,"total":data.rowCount
                                ,"result":data.rows
                            });
    }
    else
    {
        // get data by condition 
        const data= await conn.query(`${query} ${condition} ${group} ${short} offset ${offset} limit ${limit} `); 
        // for count total row
        const dataCount= await conn.query(`${query} ${condition} ${group} ${short} `);  
            res.status(200).json({
                                    "status":200
                                    ,"total":dataCount.rowCount
                                    ,"result":data.rows
                                });
    }
        
};
const pagination = async(query, condition, group, req, res) => {
    
}







module.exports = {
    success,
    successTotaol,
    error,
    pagination
}