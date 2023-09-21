export interface antdUploadFile {
    uid: string;   // unique identifier, negative is recommend, to prevent interference with internal generated id
    name: string;   // file name
    status: string;  // options：uploading, done, error, removed
    response: string;  // response from server
    linkProps: string;  // additional html props of file link
    xhr: string; // XMLHttpRequest Header
}