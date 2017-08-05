module.exports = function (context, data) {
    context.log('Hello I made a GitHub push!');

    var key = data.key;
    var values = data.ArrayOfValues;

    context.bindings.outputTable = [];

    context.log('Key:' + key);

    context.bindings.outputTable.push({
        PartitionKey: "challenge",
        RowKey: key,
        Values: values
    });

    context.res = {body:{}}

    context.done();
}
