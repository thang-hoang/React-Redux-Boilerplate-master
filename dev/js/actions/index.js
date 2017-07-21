export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const increaseCount = (count) => {
    console.log("You clicked when number = ", count);
    return {
        type: 'USER_INCREASE',
        countNumber: count + 1
    }
};
