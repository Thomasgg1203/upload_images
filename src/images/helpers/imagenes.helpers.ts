
export const renameImage = (req,  file, callback) => {
    const name = file.originalname.split('.')[0];
    const filename = file.originalname;
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');

        console.log(`${name}-${randomName}${filename}`);
        callback(null, `${name}-${randomName}${filename}`);
} 

export const fileFilter = (req,  file, callback) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|git)$/)) {
        return callback(new Error('Invalid format type'), false)
    }
    callback(null, true);
}