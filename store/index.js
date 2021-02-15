// import { convertSnackToCamel } from "@/utils/convertSnackToCamel";
// import { convertCamelToSnack } from "@/utils/convertCamelToSnack";

export const state = () => ({
  isLoggedIn: false,
  errors: null,
});
export const mutations = {
  setLogin(state, payload) {
    state.isLoggedIn = payload;
  },
  setValidationErrors(state, payload) {
    state.errors = payload;
  },
};
export const actions = {
  login(context, payload) {
    if (payload.email === "test-success@mail.ru") {
      context.commit("setLogin", true);
    } else {
      const detail = [
        {
          loc: ["path", "item_id"],
          msg: "value is not a valid integer",
          type: "type_error.integer",
        },
        {
          loc: ["path", "item_id"],
          msg: "value is not a valid String",
          type: "type_error.integer",
        },
        {
          loc: ["path", "item_id"],
          msg: "value is not a valid String",
          type: "type_error.integer",
        },
        {
          loc: ["path", "item_id"],
          msg: "value is not a valid String",
          type: "type_error.integer",
        },
      ];
      context.commit("setLogin", false);
      context.commit("setValidationErrors", detail);
    }
  },
};

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  errors: (state) => state.errors,
};
