const loggerMiddleware = store => next => action =>{
    //미들웨어에서 할일!! 
    console.log("현재 스토어 상태",store.getState());
    console.log("액션", action);
    const result = next(action);
    console("액션수행후 스토어 상태", store.getState());
    return result;
}

export default loggerMiddleware;