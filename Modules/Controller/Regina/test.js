const updateMedRecordService = require('../../Services/Regina/test');

class UpdateMedRecordController {

  async updateRecord(req, res, next){

    const result = await updateMedRecordService.updateRecord();
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }
}

module.exports = UpdateMedRecordController;