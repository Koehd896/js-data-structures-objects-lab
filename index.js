const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    const newObj = { ...object};
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};

function deleteFromDriverByKey(obj, key, value) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(obj, key, value) {
    delete obj[key];
    return obj;
}