function fetchLibraries({ page = 1, limit = 10 }){
    const url = `/api/libraries/?page=${page}&limit=${limit}`;

    return fetch(url)
        .then(handleResponse)
        .catch(createAndThrowError);
}

function fetchLibrary(id){
    const url = `/api/libraries/${id}`;

    return fetch(url)
        .then(handleResponse)
        .catch(createAndThrowError);
}

function handleResponse(res){
    if (res.ok){ return res.json(); }
    return res.json().then(err => Promise.reject(err));
}

function createAndThrowError(error){
    throw createError(error);
}

function createError(error){
    let msg = 'an unknow error occurred :(';

    if (error && Array.isArray(error.errors)){
        msg = (error.errors[0] || {}).message || msg;
    } else if (error && error.message){
        msg = error.message;
    }
    return new Error(msg);
}

export { fetchLibraries, fetchLibrary };
