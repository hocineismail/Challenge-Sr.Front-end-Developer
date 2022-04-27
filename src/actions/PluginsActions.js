import axios from "axios";
import { URL } from "../constants/constants";
import { onSetPlugins } from "../reducers/pluginsSlice";
//**
//* API FETCH PLUGINS
// * @returns DATA TO REDUCERS
// */
export function onFetchPlugins() {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .get(`${URL}/plugins`, config)
        .then((response) => {
          let plugins = response.data;
          let count = 0;
          for (var c in plugins) {
            count = count + 1;
          }

          return dispatch(
            onSetPlugins({
              plugins,
              count,
            })
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
