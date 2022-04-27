import axios from "axios";
import { URL } from "../constants/constants";

import { onSetTabdata, onSetTabs } from "../reducers/routesSlice";

export function onFetchTabs() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .get(`${URL}/tabs`, config)
        .then((response) => {
          return dispatch(onSetTabs(response.data || []));
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}

export function onFetchTabData() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .get(`${URL}/tabdata`, config)
        .then((response) => {
          let array = response.data;
          let count = 0;
          for (let item in array) {
            count = count + array[item].disabled.length;
          }

          return dispatch(
            onSetTabdata({ countDisbaled: count, tabdata: response.data })
          );
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}
