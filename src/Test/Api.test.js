const superagent = require('superagent');
const transport = 'http://quota-transfer-sit.anthos-dev.intra.excelcom.co.id';
const transportgcp = 'http://quota-transfer-sit.api.devgcp.excelcom.co.id';
var resp;

var selfTransfer = async (msisdn, quotaTransfer, rewardid) => {
    // post untuk masuk ke dalam link yang di inginkan
    resp = await superagent.post(transportgcp + '/quota-transfer/v1/quota-transfer/v1/self-allowance')
        // set di bawah ini di isi dengan value params yang di inginkan
        .set('accept', '/')
        .set('ax-request-id', '078a1518-39ad-4a19-a332-f5866d1dd6d2')
        .set('channel', 'API')
        .set('touchpoint', 'MYXLU')
        .set('Content-Type', 'application/json')

        .send({
            "msisdn": msisdn,
            "quota": quotaTransfer,
            "rewardId": rewardid
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    return resp;
}

var quotaTransfer = async (msisdnSource, msisdnTarget, quotaTransfer, serviceid, soccd) => {
    resp = await superagent.put(transport + '/quota-transfer/v1/subscription')
        .set('accept', '/')
        .set('ax-request-at', '2021-05-24T10:00:00Z')
        .set('ax-request-id', '3aeb3bc2-1a8d-4a05-a0b4-6d1a2d5b600f')
        .set('ax-channel', 'AXISNET')
        .set('Content-Type', 'application/json')

        .send({
            "msisdnSource": msisdnSource,
            "msisdnTarget": msisdnTarget,
            "quotaTransfer": quotaTransfer,
            "serviceid": serviceid,
            "soccd": soccd
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    return resp;
}

        // Test API
(async () => {
    var hit = await selfTransfer('6287889918162', '10240', 'VIP_9210129_M');
})();

    //Test API
    (async () => {
        var hit = await updateCappingParent('6287878870019', '628195458123', '2', 'main');
        if (hit.body) {
            console.log(hit.statusCode);
            console.log(hit.body);;

        } else {
            console.log(hit.response.statusCode);
            console.log(hit.response.body);
        }
    })();

module.exports = { quotaTransfer, selfTransfer };