import { authConstants } from "./Constants";

export const login = (user) => {
    return async (dispatch) => {
        var res = "";
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (user.email.match(mailformat)) {
            res = await fetch(
                "http://localhost:5000/dokan.com/customer/login",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                    }),
                }
            );
        } else {
            res = await fetch(
                "http://localhost:5000/dokan.com/customer/login",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        phone: user.email,
                        password: user.password,
                    }),
                }
            );
        }

        if (res.status === 201) {
            const data = await res.json();
            dispatch({
                type: authConstants.LOGIN_REQUEST,
                payload: {
                    user: data.msg,
                    status: true,
                },
            });
            localStorage.setItem("user", JSON.stringify(data.msg));
            localStorage.setItem("login", true);
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: res.error,
                },
            });
        }
    };
};
